import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mockData";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "25");

  const start = (page - 1) * limit;
  const paginated = mockProducts.slice(start, start + limit);

  return NextResponse.json({ total: mockProducts.length, data: paginated });
}