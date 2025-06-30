import React, { useState, useEffect } from "react";
import axios from "axios";

const OPENAI_API_KEY = "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"; // ⚠️ Use only in dev/testing — not production

const Lang = ({ translateWord, targetLang }) => {
  const [translatedText, setTranslatedText] = useState(translateWord);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const translateText = async () => {
      if (!translateWord || targetLang === "en") {
        setTranslatedText(translateWord);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4o", // use gpt-4o (or gpt-3.5-turbo if you have access)
            messages: [
              {
                role: "system",
                content: `Translate this to ${targetLang}. Only return the translated result.`,
              },
              {
                role: "user",
                content: translateWord,
              },
            ],
            temperature: 0.3,
          },
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );

        const output = response.data.choices[0].message.content.trim();
        setTranslatedText(output);
      } catch (error) {
        console.error("Translation error:", error);
        setTranslatedText(translateWord); // fallback
      } finally {
        setLoading(false);
      }
    };

    translateText();
  }, [translateWord, targetLang]);

  return <span>{loading ? <span>translating<span className=" animate-pulse ">..</span></span> : translatedText}</span>;
};

export default Lang;
