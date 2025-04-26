'use client';

import React, { useState, useEffect } from "react";

const JsonContent = () => {
  const [input, setInput] = useState("");
  const [formatted, setFormatted] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      if (input.trim() === "") {
        setFormatted("");
        return;
      }

      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setFormatted(pretty);
    } catch (err) {
      setFormatted("⚠️ 유효한 JSON 형식이 아닙니다.");
    }

    setCopied(false);
  }, [input]);

  const handleCopy = async () => {
    if (!formatted || formatted.startsWith("⚠️")) return;

    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("❌ 복사 실패");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='JSON 문자열을 입력하세요'
        className="w-full h-40 p-3 border rounded font-mono"
      />

      <div className="p-3 border rounded bg-gray-100 bg-myblack">
        <div className="flex justify-between items-center mb-2">
          <strong>포맷 결과 :</strong>
          <button
            onClick={handleCopy}
            className="text-sm px-3 py-1 border rounded hover:text-mypurple-100"
          >
            {copied ? "✅ copied" : "📋 copy"}
          </button>
        </div>
        <pre className="whitespace-pre-wrap break-all text-sm bg-myblack p-2 rounded mt-1">
          {formatted}
        </pre>
      </div>
    </div>
  );
};

export default JsonContent;
