
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";

// GET: Retrieve all projects
export async function GET() {
  try {
    const db = await getDb();

    const projects = await db
      .collection("projects")
      .find({})
      .sort({ _id: -1 })
      .toArray();

    return NextResponse.json(
      projects.map((project) => ({
        ...project,
        _id: project._id.toString(),
      }))
    );
  } catch (error) {
    console.error("Fetch projects error:", error);

    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST: Add a new project
export async function POST(request) {
  try {
    const body = await request.json();

    const { title, description, technologies, liveLink } = body;

    if (!title?.trim() || !description?.trim()) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const db = await getDb();

    const newProject = {
      title: title.trim(),
      description: description.trim(),
      technologies: Array.isArray(technologies) ? technologies : [],
      liveLink: typeof liveLink === "string" ? liveLink.trim() : "",
      createdAt: new Date(),
    };

    const result = await db
      .collection("projects")
      .insertOne(newProject);

    return NextResponse.json(
      {
        message: "Project added successfully",
        project: {
          ...newProject,
          _id: result.insertedId.toString(),
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Add project error:", error);

    return NextResponse.json(
      { error: "Failed to add project" },
      { status: 500 }
    );
  }
}
