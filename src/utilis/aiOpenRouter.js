export const getAIMoveFromOpenRouter = async (board) => {
  console.log(import.meta.env.VITE_OPENROUTER_API_KEY);

  const systemPrompt = `
    You are a smart Tic Tac Toe AI playing as "O".

    Your goals:
    1. Win if possible
    2. Block the opponent if they are about to win
    3. Otherwise: choose center > corner > side 

    only return ONE number(0-8). Do not explain.
  `;

  const userPrompt = `
    current board: ${JSON.stringify(board)}

    Each cell is indexed like this :
    [0][1][2]
    [3][4][5]
    [6][7][8]

    "O" = you (AI)
    "X" = human player
    null = empty cell

    what is your move?
  `;

  function getFallbackMove(board) {
    const preferredMoves = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    return preferredMoves.find(i => board[i] === null) ?? null;
  }

  const getMoveFromClaude = async () => {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1",
        temperature: 0.2,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      }),
    });

    if (!response.ok) {
      // Throw error for non-2xx responses (e.g., 402 Payment Required)
      throw new Error(`OpenRouter API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data from OpenRouter:", data);

    const text = data.choices?.[0]?.message?.content?.trim();
    console.log("AI Move Text:", text);

    const match = text?.match(/\d+/);
    const move = match ? parseInt(match[0], 10) : null;

    if (move === null || move < 0 || move > 8 || board[move] !== null) {
      // Invalid move, fallback
      throw new Error("Invalid move returned by AI");
    }

    return move;
  };

  try {
    const Move = await getMoveFromClaude();
    return Move;
  } catch (error) {
    console.error("Error getting AI move:", error);
    return getFallbackMove(board);
  }
};
