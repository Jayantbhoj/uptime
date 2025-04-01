"use server";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import { z } from "zod";

const urlSchema = z.object({
  url: z.string().trim().url({ message: "Invalid URL format" }),
});

export async function addWebsite(url: string) {
  const result = urlSchema.safeParse({ url });

  if (!result.success) {
    console.log(result.error.format());
    throw new Error("Invalid URL format.");
  }

  const user = await prisma.user.findUnique({
    where: { id: "4b9e49c2-26e3-434c-8c31-790a98005a62" },
  });

  if (!user) {
    throw new Error("User not found.");
  }

  const newWebsite = await prisma.website.create({
    data: {
      url: result.data.url,
      userId: user.id,
    },
  });

  try {
    await axios.get("http://localhost:5001/new-websites");
  } catch (error) {
    console.error("Error calling backend API:", error);
  }

  return newWebsite;
}
