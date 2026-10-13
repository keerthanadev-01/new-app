
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // READ - Fetch projects from MongoDB
  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch projects");
      }

      const projectList = data.map((project) => ({
        ...project,
        id: project._id,
      }));

      setProjects(projectList);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Delete project from MongoDB
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to delete project");
      }

      setProjects((currentProjects) =>
        currentProjects.filter((project) => project.id !== id)
      );

      console.log("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert(error.message || "Could not delete project.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="pt-4 mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Manage Projects
            </h1>

            <p className="mt-2 text-gray-600">
              View and manage your portfolio projects.
            </p>
          </div>

          <Link
            href="/admin/projects/add"
            className="rounded-lg bg-black px-5 py-3 text-white"
          >
            Add Project
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-gray-600">Loading projects...</p>
        )}

        {/* Error or No Projects */}
        {!loading && projects.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-gray-900">
              No projects found
            </h2>

            <p className="mt-2 text-gray-600">
              Add your first project to get started.
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && projects.length > 0 && (
          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-6">
                  {/* Project Information */}
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {project.title}
                    </h2>

                    <p className="mt-2 text-gray-600">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies?.map(
                        (technology, index) => (
                          <span
                            key={`${technology}-${index}`}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 gap-3">
                    <Link
                      href={`/admin/projects/edit/${project.id}`}
                      className="rounded-lg border border-black px-4 py-2 text-black"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(project.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
