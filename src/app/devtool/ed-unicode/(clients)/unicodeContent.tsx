'use client';

import React, { useState, useEffect } from "react";

type Mode = "auto" | "encode" | "decode";

const encodeUnicode = (str: string): string => {
  return str
    .split("")
    .map((char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`)
    .join("");
};

const decodeUnicode = (str: string): string => {
  return str.replace(/\\u[\dA-Fa-f]{4}/g, (match) =>
    String.fromCharCode(parseInt(match.replace("\\u", ""), 16))
  );
};

const isUnicode = (str: string): boolean => {
  return /^(\\u[\dA-Fa-f]{4})+$/.test(str);
};

export const UnicodeContent = () => {
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
        raw = encodeUnicode(value);
        output = `🔐 유니코드 인코딩 결과:\n${raw}`;
      } else if (mode === "decode") {
        raw = decodeUnicode(value);
        output = `🔓 유니코드 디코딩 결과:\n${raw}`;
      } else {
        if (isUnicode(value)) {
          raw = decodeUnicode(value);
          output = `🔓 유니코드 디코딩 결과:\n${raw}`;
        } else {
          raw = encodeUnicode(value);
          output = `🔐 유니코드 인코딩 결과:\n${raw}`;
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
        placeholder="유니코드 문자열 또는 \\uXXXX 포맷을 입력하세요"
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
