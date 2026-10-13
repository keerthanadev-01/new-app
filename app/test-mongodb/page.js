
"use client";

import { useState } from "react";

export default function TestMongoDB() {
  const [message, setMessage] = useState("");

  async function addTestProject() {
    try {
      setMessage("Adding project...");

      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "MongoDB Test Project",
          description: "Testing MongoDB connection with Next.js",
          technologies: ["Next.js", "MongoDB"],
          liveLink: "https://example.com",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to add project");
      }

      setMessage("Success! Project added. ID: " + data.project._id);
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  }

  return (
    <main className="pt-16">
      <h1 className="text-2xl font-bold mb-4">
        MongoDB Test
      </h1>

      <button
        onClick={addTestProject}
        className="rounded bg-blue-600 px-5 py-3 text-white"
      >
        Add Test Project
      </button>

      <p className="mt-4">{message}</p>
    </main>
  );
}
