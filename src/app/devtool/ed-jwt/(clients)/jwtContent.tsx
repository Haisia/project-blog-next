'use client';

import React, { useState, useEffect } from "react";

const decodeBase64Url = (str: string) => {
  try {
    const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64 + "===".slice((base64.length + 3) % 4);
    const json = atob(padded);
    return JSON.parse(json);
  } catch {
    return null;
  }
};

const JwtContent = () => {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCopied(false);

    if (!input.trim()) {
      setHeader("");
      setPayload("");
      return;
    }

    const parts = input.split(".");
    if (parts.length !== 3) {
      setHeader("⚠️ 올바른 JWT 형식이 아닙니다.");
      setPayload("");
      return;
    }

    const [headerPart, payloadPart] = parts;

    const decodedHeader = decodeBase64Url(headerPart);
    const decodedPayload = decodeBase64Url(payloadPart);

    setHeader(decodedHeader ? JSON.stringify(decodedHeader, null, 2) : "⚠️ 헤더 디코딩 실패");
    setPayload(decodedPayload ? JSON.stringify(decodedPayload, null, 2) : "⚠️ 페이로드 디코딩 실패");
  }, [input]);

  const handleCopy = async () => {
    const result = `${header}\n\n${payload}`;
    try {
      await navigator.clipboard.writeText(result);
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
        placeholder="JWT 토큰을 입력하세요"
        className="w-full h-32 p-3 border rounded"
      />

      <div className="p-3 border rounded bg-gray-100 bg-myblack">
        <div className="flex justify-between items-center mb-2">
          <strong>디코딩 결과 :</strong>
          <button
            onClick={handleCopy}
            className="text-sm px-3 py-1 border rounded hover:text-mypurple-100"
          >
            {copied ? "✅ copied" : "📋 copy"}
          </button>
        </div>

        <div className="mb-2">
          <strong>🔐 Header:</strong>
          <pre className="whitespace-pre-wrap break-all text-sm bg-myblack p-2 rounded mt-1">{header}</pre>
        </div>

        <div>
          <strong>📦 Payload:</strong>
          <pre className="whitespace-pre-wrap break-all text-sm bg-myblack p-2 rounded mt-1">{payload}</pre>
        </div>
      </div>
    </div>
  );
};

export default JwtContent;
