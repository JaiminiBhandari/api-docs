import React, { useEffect, useState } from "react";

/**
 * Minimal React component that replicates the Vue SignatureGenerator functionality.
 * - Uses Web Crypto API to generate HMAC SHA256
 * - Validates JSON request body
 * - Generates timestamp
 * - Provides copy-to-clipboard for headers and cURL
 *
 * Drop this file into: /api-docs/src/components/SignatureGenerator.tsx
 * Use it in markdown as: <SignatureGenerator />
 */

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacSha256Hex(key: string, message: string) {
  // Guard for environments that don't expose the Web Crypto API (SSR / old browsers)
  const webCrypto = (globalThis as any).crypto;
  if (!webCrypto || !webCrypto.subtle) {
    throw new Error("Web Crypto API is not available in this environment.");
  }

  const enc = new TextEncoder();
  const keyData = enc.encode(key);
  const msgData = enc.encode(message);

  const cryptoKey = await webCrypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const sig = await webCrypto.subtle.sign("HMAC", cryptoKey, msgData);
  return toHex(sig);
}

export default function SignatureGenerator() {
  const [apiKey, setApiKey] = useState("");
  const [apiSecret, setApiSecret] = useState("");
  const [requestBody, setRequestBody] = useState("");
  const [timestamp, setTimestamp] = useState<string>(
    Math.floor(Date.now() / 1000).toString()
  );
  const [signature, setSignature] = useState("");
  const [messageToSign, setMessageToSign] = useState("");
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load stored credentials on mount
    const stored = localStorage.getItem("arp_api_credentials");
    if (stored) {
      try {
        const creds = JSON.parse(stored);
        setApiKey(creds.apiKey || "");
        setApiSecret(creds.apiSecret || "");
      } catch (e) {
        console.error("Failed to parse stored credentials:", e);
      }
    }

    // generate on first render with default timestamp
    // we don't auto-generate everytime to avoid surprising edits; user triggers generation
    // mark client-mounted so we avoid rendering interactive UI during SSR
    setMounted(true);
  }, []);

  // Save credentials to localStorage when they change
  useEffect(() => {
    if (apiKey && apiSecret) {
      localStorage.setItem("arp_api_credentials", JSON.stringify({ apiKey, apiSecret }));
    }
  }, [apiKey, apiSecret]);

  const generateTimestamp = () => {
    setTimestamp(Math.floor(Date.now() / 1000).toString());
  };

const generateSignature = async () => {
  setError("");
  setSignature("");
  setMessageToSign("");

  if (!apiKey || !apiSecret || !timestamp) {
    setError("API Key, API Secret and Timestamp are required.");
    return;
  }

  let bodyString = "";
  if (requestBody && requestBody.trim() !== "") {
    bodyString = requestBody.trim(); // Use exact string, don't canonicalize

    // Still validate it's valid JSON for user feedback
    try {
      JSON.parse(bodyString);
    } catch (e: any) {
      setError("Invalid JSON in request body. Please fix syntax.");
      return;
    }
  }

  const message = apiKey + bodyString + timestamp;
  setMessageToSign(message);

  try {
    const sig = await hmacSha256Hex(apiSecret, message);
    setSignature(sig);
  } catch (e: any) {
    console.error("HMAC error:", e);
    setError("Failed to generate signature: " + (e?.message || e));
  }
};


  const copyToClipboard = async (text: string) => {
    try {
      const nav = (globalThis as any).navigator;
      if (!nav || !nav.clipboard) {
        console.warn("Clipboard API not available");
        return;
      }
      await nav.clipboard.writeText(text);
    } catch (e) {
      console.error("Clipboard error", e);
    }
  };

  const headersText = `X-API-Key: ${apiKey}
X-Timestamp: ${timestamp}
X-Signature: ${signature}`;

  const curlText = `curl -X POST "https://gps.arpdigital.io/api/v1/your-endpoint" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${apiKey}" \\
  -H "X-Timestamp: ${timestamp}" \\
  -H "X-Signature: ${signature}"${requestBody ? ` \\\n  -d '${requestBody}'` : ""}`;

  // Avoid rendering interactive content during SSR to prevent runtime errors
  if (!mounted) {
    return <div />;
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 18,
        borderRadius: 8,
        width: "50vw",
      }}
    >
      <h3>🔐 Interactive Signature Generator</h3>
      <p style={{ marginTop: 0 }}>
        Use this tool to generate and test HMAC SHA256 signatures for API
        requests.
      </p>

      <div style={{ marginBottom: 10 }}>
        <label>API Key</label>
        <input
          value={apiKey}
          onChange={e => setApiKey(e.target.value)}
          placeholder="Enter your API key"
          disabled={false}
          style={{
            width: "100%",
            padding: 8,
            marginTop: 6,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>API Secret</label>
        <input
          value={apiSecret}
          onChange={e => setApiSecret(e.target.value)}
          placeholder="Enter your API secret"
          type="password"
          disabled={false}
          style={{
            width: "100%",
            padding: 8,
            marginTop: 6,
            border: "1px solid #ccc",
            borderRadius: 4,
          }}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <label>Request Body (JSON)</label>
        <textarea
          value={requestBody}
          onChange={e => setRequestBody(e.target.value)}
          placeholder='{"example":"value"}'
          rows={4}
          style={{ width: "100%", padding: 8, marginTop: 6, border: "1px solid #ccc", borderRadius: 4  }}
        />
        <small>Leave empty for GET requests</small>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>Timestamp</label>
        <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
          <input
            value={timestamp}
            onChange={e => setTimestamp(e.target.value)}
            disabled={false}
            style={{ flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: 4  }}
            placeholder="Unix timestamp (seconds)"
          />
          <button onClick={generateTimestamp} style={{ padding: "8px 12px", border: "1px solid #ccc", borderRadius: 4  }}>
            Generate Current
          </button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <button
          onClick={generateSignature}
          style={{ padding: "8px 12px", cursor: "pointer", border: "1px solid #ccc", borderRadius: 4  }}
        >
          Generate Signature
        </button>
        <button
          onClick={() => {
            setApiKey("");
            setApiSecret("");
            setRequestBody("");
            setSignature("");
            setMessageToSign("");
            setError("");
            setTimestamp(Math.floor(Date.now() / 1000).toString());
          }}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Reset
        </button>
      </div>

      {error && (
        <div
          style={{
            background: "#ffe6e6",
            color: "#900",
            padding: 10,
            borderRadius: 6,
            marginBottom: 12,
          }}
        >
          {error}
        </div>
      )}

      {signature && (
        <div style={{ marginTop: 12 }}>
          <h4>Generated Headers</h4>
          <pre
            style={{
              padding: 12,
              borderRadius: 6,
              overflowX: "auto",
            }}
          >
            {headersText}
          </pre>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button onClick={() => copyToClipboard(headersText)}>
              📋 Copy Headers
            </button>
            <button onClick={() => copyToClipboard(curlText)}>
              📋 Copy cURL
            </button>
          </div>

          <h4 style={{ marginTop: 14 }}>Message to Sign</h4>
          <pre
            style={{
              
              padding: 12,
              borderRadius: 6,
              overflowX: "auto",
            }}
          >
            {messageToSign}
          </pre>

          <h4 style={{ marginTop: 14 }}>cURL Example</h4>
          <pre
            style={{
              
              padding: 12,
              borderRadius: 6,
              overflowX: "auto",
            }}
          >
            {curlText}
          </pre>
        </div>
      )}
    </div>
  );
}
