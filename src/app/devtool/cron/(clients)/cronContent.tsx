'use client';

import React, { useState, useEffect } from "react";
import "cronstrue/locales/ko";
import cronstrue from "cronstrue";

const decodeCron = (cronStr: string) => {
  return cronstrue.toString(cronStr, { locale: "ko" });
};

const CronContent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (input.trim() === "") {
      setResult("");
      return;
    }

    try {
      const decoded = decodeCron(input);
      setResult(`🕒 설명:\n${decoded}`);
    } catch {
      setResult("⚠️ 유효한 Cron 표현식이 아닙니다.");
    }

    setCopied(false);
  }, [input]);

  const handleCopy = async () => {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result.replace("🕒 설명:\n", ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("❌ 클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Cron 표현식을 입력하세요. 예: 0 0 * * *"
        className="w-full h-40 p-3 border rounded"
      />

      <div className="p-3 border rounded bg-gray-100 whitespace-pre-wrap break-all bg-myblack">
        <div className="flex justify-between items-center mb-2">
          <strong>result :</strong>
          <button
            onClick={handleCopy}
            className="text-sm px-3 py-1 border rounded hover:text-mypurple-100"
          >
            {copied ? "✅ copied" : "📋 copy"}
          </button>
        </div>
        <div>{result}</div>
      </div>
    </div>
  );
};

export default CronContent;
