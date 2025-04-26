'use client';

import React, { useState, useEffect } from "react";

const isBase64 = (str: string): boolean => {
  if (!str || str.length % 4 !== 0) return false;

  const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;
  return base64Regex.test(str);
};

const encodeBase64 = (str: string) => {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return btoa(String.fromCharCode(...bytes));
};

const decodeBase64 = (str: string) => {
  const binary = atob(str);
  const bytes = new Uint8Array([...binary].map(char => char.charCodeAt(0)));
  const decoder = new TextDecoder();
  return decoder.decode(bytes);
};

type Mode = "auto" | "encode" | "decode";

export const Base64content = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [rawResult, setRawResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<Mode>("auto");

  const processInput = (value: string, mode: Mode) => {
    try {
      let output = "";
      let raw = "";

      if (mode === "encode") {
        raw = encodeBase64(value);
        output = `🔐 인코딩 결과:\n${raw}`;
      } else if (mode === "decode") {
        raw = decodeBase64(value);
        output = `🔓 디코딩 결과:\n${raw}`;
      } else {
        if (isBase64(value)) {
          raw = decodeBase64(value);
          output = `🔓 디코딩 결과:\n${raw}`;
        } else {
          raw = encodeBase64(value);
          output = `🔐 인코딩 결과:\n${raw}`;
        }
      }

      setResult(output);
      setRawResult(raw);
    } catch {
      setResult("⚠️ 변환 중 오류가 발생했습니다.");
      setRawResult("");
    }
  };

  useEffect(() => {
    if (input.trim() !== "") {
      processInput(input, mode);
      setCopied(false);
    } else {
      setResult("");
      setRawResult("");
    }
  }, [input, mode]);

  const handleCopy = async () => {
    if (!rawResult) return;

    try {
      await navigator.clipboard.writeText(rawResult);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("❌ 클립보드 복사에 실패했습니다.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-6 items-center">
        {["auto", "encode", "decode"].map((item) => (
          <label key={item} className="flex items-center gap-1 capitalize">
            <input
              type="radio"
              name="mode"
              value={item}
              checked={mode === item}
              onChange={() => setMode(item as Mode)}
            />
            {item === "auto" ? "자동 감지" : item === "encode" ? "인코딩" : "디코딩"}
          </label>
        ))}
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Base64 또는 일반 텍스트를 입력하세요"
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
