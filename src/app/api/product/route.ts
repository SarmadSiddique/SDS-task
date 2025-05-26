import { NextResponse } from "next/server";

export function GET() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 2,
      name: "Headphones",
      price: 199.99,
      category: "Accessories",
      inStock: true,
    },
    {
      id: 3,
      name: "Book",
      price: 19.99,
      category: "Education",
      inStock: false,
    },
  ];

  return NextResponse.json({ products });
}
