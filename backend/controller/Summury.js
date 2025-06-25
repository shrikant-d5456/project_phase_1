import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: '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'
});

export const generateSummary = async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required for summarization.' });
  }

  try {
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: `Summarize the following text:\n\n${text}`,
        },
      ],
      model: 'llama3-70b-8192', // or llama3-8b-8192
    });

    const summary = response.choices[0]?.message?.content?.trim();
    res.status(200).json({ summary });
  } catch (error) {
    console.error('Groq API Error:', error.message);
    res.status(500).json({ error:"error to generate summury"});
  }
};
