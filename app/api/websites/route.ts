import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const websites = await prisma.website.findMany(); 
        return NextResponse.json(websites);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch websites" }, { status: 500 });
    }
}