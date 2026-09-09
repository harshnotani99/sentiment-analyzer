export default function handler(req, res) {
  const { conversation } = req.body;

  const positiveWords = [
    "thank",
    "great",
    "good",
    "excellent",
    "happy",
    "love",
  ];

  const negativeWords = [
    "bad",
    "angry",
    "delay",
    "terrible",
    "frustrated",
    "issue",
    "problem",
  ];

  const text = conversation.toLowerCase();

  let positive = 0;
  let negative = 0;

  positiveWords.forEach((word) => {
    if (text.includes(word)) positive++;
  });

  negativeWords.forEach((word) => {
    if (text.includes(word)) negative++;
  });

  let overallSentiment = "Neutral";

  if (positive > negative)
    overallSentiment = "Positive";

  if (negative > positive)
    overallSentiment = "Negative";

  res.status(200).json({
    overallSentiment,
    customerSatisfaction:
      overallSentiment === "Positive"
        ? 90
        : overallSentiment === "Neutral"
        ? 70
        : 40,

    frustrationLevel:
      overallSentiment === "Negative"
        ? 80
        : 20,

    agentProfessionalism: 90,

    resolutionProbability:
      overallSentiment === "Positive"
        ? 85
        : 60,

    summary:
      "Customer conversation analyzed successfully.",
  });
}