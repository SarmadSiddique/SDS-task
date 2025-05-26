import { CreateUserRequest, User } from "@/app/types/users";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Mock data - in a real app, this would come from a database
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    createdAt: new Date().toISOString(),
  },
];

// GET handler to fetch all users
export async function GET() {
  return NextResponse.json({ users });
}

// POST handler to create a new user
export async function POST(request: NextRequest) {
  try {
    const body: CreateUserRequest = await request.json();

    // Validate request
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ user: newUser });
  } catch (error) {
    console.error("Failed to create user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
