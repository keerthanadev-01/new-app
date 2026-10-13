"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function EditProject() {
  const params = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [liveLink, setLiveLink] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // READ existing project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectRef = doc(db, "projects", params.id);

        const projectSnapshot = await getDoc(projectRef);

        if (projectSnapshot.exists()) {
          const projectData = projectSnapshot.data();

          setTitle(projectData.title || "");
          setDescription(projectData.description || "");
          setTechnologies(
            projectData.technologies?.join(", ") || ""
          );
          setLiveLink(projectData.liveLink || "");
        } else {
          console.log("Project not found");
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  // UPDATE project
  const handleSubmit = async (event) => {
    event.preventDefault();

    setSaving(true);

    const updatedProject = {
      title,
      description,
      technologies: technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
      liveLink,
    };

    try {
      const projectRef = doc(
        db,
        "projects",
        params.id
      );

      await updateDoc(projectRef, updatedProject);

      console.log("Project updated successfully");

      router.push("/admin/projects");
    } catch (error) {
      console.error("Error updating project:", error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-gray-600">
            Loading project...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">

      <div className="mx-auto max-w-3xl">

        <h1 className="text-4xl font-bold text-gray-900">
          Edit Project
        </h1>

        <p className="mt-2 text-gray-600">
          Update your portfolio project details.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
        >

          {/* Title */}
          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Project Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black text-gray-900"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Description
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              rows="5"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black text-gray-900"
              required
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Technologies
            </label>

            <input
              type="text"
              value={technologies}
              onChange={(event) =>
                setTechnologies(event.target.value)
              }
              placeholder="React.js, JavaScript, Firebase"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black text-gray-900"
              required
            />
          </div>

          {/* Live Link */}
          <div>
            <label className="mb-2 block font-medium text-gray-900">
              Live Website Link
            </label>

            <input
              type="url"
              value={liveLink}
              onChange={(event) =>
                setLiveLink(event.target.value)
              }
              placeholder="https://example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black text-gray-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
            >
              {saving ? "Updating..." : "Update Project"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin/projects")}
              className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </main>
  );
}