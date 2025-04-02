"use client";

import { useEffect, useState } from "react";

type Website = {
  url: string;
  status: "UP" | "DOWN";
  responseTime: number;
};

export default function Monitor() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API || "http://localhost:5001/status";

  const fetchWebsites = async () => {
    try {
      setError(null);
      const res = await fetch(BACKEND_API);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data: Website[] = await res.json();
      setWebsites(data);
    } catch (err) {
      setError("Unable to load website statuses.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
    const interval = setInterval(fetchWebsites, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Website Monitor</h1>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {loading ? (
        <div className="space-y-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="p-4 bg-gray-100 rounded-lg animate-pulse h-20"></div>
          ))}
        </div>
      ) : websites.length === 0 ? (
        <p className="text-gray-500 text-center">No websites added for monitoring.</p>
      ) : (
        <ul className="space-y-4">
          {websites.map((site, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div>
                <span className="font-semibold text-lg">{site.url}</span>
                {site.responseTime > 0 && (
                  <p className="text-sm text-gray-500">Response Time: {site.responseTime}ms</p>
                )}
              </div>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  site.status === "UP" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {site.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
