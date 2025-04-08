import React, { useState, useEffect } from "react";

const Lang = ({ translateWord, targetLang }) => {
    const [translatedText, setTranslatedText] = useState(translateWord);

    useEffect(() => {
        const translateText = async () => {
            if (!targetLang || targetLang === "en") {
                setTranslatedText(translateWord); // No translation needed for English
                return;
            }
            try {
                const response = await fetch(
                    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(translateWord)}&langpair=en|${targetLang}`
                );
                const data = await response.json();
                setTranslatedText(data.responseData.translatedText);
            } catch (error) {
                console.error("Translation error:", error);
                setTranslatedText(translateWord); // Fallback to original text
            }
        };

        translateText();
    }, [translateWord, targetLang]);

    return <span>{translatedText}</span>;
};
export default Lang;