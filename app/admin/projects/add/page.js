
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProject() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // CREATE - Save project to MongoDB
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const project = {
      title: title.trim(),
      description: description.trim(),
      technologies: technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
      liveLink: liveLink.trim(),
    };

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to add project");
      }

      setMessage("Project added successfully!");

      // Redirect to the project list after saving
      router.push("/admin/projects");
    } catch (error) {
      console.error("Error adding project:", error);
      setMessage(error.message || "Error adding project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 px-8 py-16">
      <div className="pt-4 max-w-3xl mx-auto">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Add Project
          </h1>

          <p className="mt-2 text-gray-600">
            Add a new project to your portfolio.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Project Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                placeholder="Enter project title"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none resize-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                rows="5"
                placeholder="Enter project description"
              />
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Technologies
              </label>

              <input
                type="text"
                value={technologies}
                onChange={(e) => setTechnologies(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                placeholder="React.js, JavaScript, MongoDB"
              />

              <p className="mt-2 text-sm text-gray-500">
                Separate each technology with a comma.
              </p>
            </div>

            {/* Live Link */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Live Project URL
              </label>

              <input
                type="url"
                value={liveLink}
                onChange={(e) => setLiveLink(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 outline-none transition focus:border-black focus:ring-2 focus:ring-gray-200"
                placeholder="https://example.com"
              />
            </div>

            {/* Status Message */}
            {message && (
              <p role="status" className="text-sm text-gray-700">
                {message}
              </p>
            )}

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition disabled:opacity-60"
              >
                {loading ? "Adding..." : "Add Project"}
              </button>

              <button
                type="button"
                onClick={() => router.push("/admin/projects")}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
