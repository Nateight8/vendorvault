"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Edit, Eye, Trash } from "lucide-react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  brand: string;
  sku: string;
  category: string;
  stock: number;
  price: number;
  status: "out of stock" | "low stock" | "available";
  imageUrl?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds with Long Battery Life",
    brand: "AudioTech",
    sku: "WT-001-LONGSKU",
    category: "Electronics and Accessories",
    stock: 50,
    price: 99.99,
    status: "available",
    imageUrl: "/product/airpod.webp",
  },
  {
    id: 2,
    name: "Smart Watch with Health Monitoring",
    brand: "TechWear",
    sku: "SW-002-HEALTH",
    category: "Wearables and Fitness",
    stock: 5,
    price: 199.99,
    status: "low stock",
    imageUrl: "/product/watch.webp",
  },
  {
    id: 3,
    name: "Bluetooth Speaker with 360-Degree Sound",
    brand: "AeroLink Pro",
    sku: "BS-003-360SOUND",
    category: "Audio and Home Entertainment",
    stock: 0,
    price: 79.99,
    status: "out of stock",
    imageUrl: "/product/blue.webp",
  },
  {
    id: 4,
    name: "Nike pants",
    brand: "Nike",
    sku: "BS-003-360SOUND",
    category: "Audio and Home Entertainment",
    stock: 20,
    price: 79.99,
    status: "out of stock",
    imageUrl: "/product/pant.webp",
  },
  {
    id: 5,
    name: "Water bottle",
    brand: "SoundMaster",
    sku: "BS-003-360SOUND",
    category: "Audio and Home Entertainment",
    stock: 0,
    price: 79.99,
    status: "out of stock",
    imageUrl: "/product/bottle.webp",
  },
];

type SortConfig = {
  key: keyof Product;
  direction: "asc" | "desc";
} | null;

export default function ProductList() {
  const [sortConfig, setSortConfig] = useState<SortConfig>(null);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const getStatusColor = (status: Product["status"]) => {
    switch (status) {
      case "out of stock":
        return "bg-red-100 text-red-800";
      case "low stock":
        return "bg-yellow-100 text-yellow-800";
      case "available":
        return "bg-green-100 text-green-800";
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;

    const aValue = a[key as keyof typeof a];
    const bValue = b[key as keyof typeof b];

    // Handle undefined values
    if (aValue === undefined || bValue === undefined) return 0;

    if (aValue < bValue) return direction === "asc" ? -1 : 1;
    if (aValue > bValue) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = (key: keyof Product) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="container bg-accent/10 mx-auto py-6 border border-border/40 rounded-md ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px] px-3">
              <Checkbox
                checked={selectedProducts.length === products.length}
                onCheckedChange={(checked) => {
                  setSelectedProducts(checked ? products.map((p) => p.id) : []);
                }}
                aria-label="Select all products"
              />
            </TableHead>
            <TableHead className="w-[45ch] px-3">
              <div className="flex justify-between items-center">
                Product
                <button
                  className="hover:text-primary"
                  onClick={() => requestSort("name")}
                >
                  <CaretSortIcon className="h-4 w-4" />
                  <span className="sr-only">Sort by product name</span>
                </button>
              </div>
            </TableHead>
            <TableHead className="w-[100px] px-3">SKU</TableHead>
            <TableHead className="w-[150px] px-3">Category</TableHead>
            <TableHead className="w-[22ch] px-3">
              <div className="flex justify-between items-center">
                Stock
                <button
                  className="hover:text-primary"
                  onClick={() => requestSort("stock")}
                >
                  <CaretSortIcon className="h-4 w-4" />
                  <span className="sr-only">Sort by stock</span>
                </button>
              </div>
            </TableHead>
            <TableHead className="w-[22ch] px-3 ">
              <div className="flex justify-between items-center">
                Price
                <button
                  className="hover:text-primary"
                  onClick={() => requestSort("price")}
                >
                  <CaretSortIcon className="h-4 w-4" />
                  <span className="sr-only">Sort by price</span>
                </button>
              </div>
            </TableHead>
            <TableHead className="w-[22ch] px-3">Status</TableHead>
            <TableHead className="w-[120px] px-3 ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="px-3">
                <Checkbox
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={() => toggleProductSelection(product.id)}
                  aria-label={`Select ${product.name}`}
                />
              </TableCell>
              <TableCell className="px-3">
                <div className="flex items-center space-x-3">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={36}
                      height={64}
                      className="rounded-md object-cover"
                    />
                  ) : (
                    <Skeleton className="w-10 aspect-[3/3] rounded-sm" />
                  )}
                  <div className="">
                    <div
                      className="font-medium w-[16ch] truncate"
                      title={product.name}
                    >
                      {product.name}
                    </div>
                    <div
                      className="text-sm text-gray-500 truncate"
                      title={product.brand}
                    >
                      {product.brand}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-3">
                <span
                  className="truncate block max-w-[8ch]"
                  title={product.sku}
                >
                  {product.sku}
                </span>
              </TableCell>
              <TableCell className="px-3">
                <span
                  className="truncate block max-w-[16ch]"
                  title={product.category}
                >
                  {product.category}
                </span>
              </TableCell>
              <TableCell className="px-3">{product.stock}</TableCell>
              <TableCell className="px-3">
                ${product.price.toFixed(2)}
              </TableCell>
              <TableCell className="px-3">
                <Badge
                  className={`${getStatusColor(product.status)} text-nowrap`}
                >
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell className="px-3">
                <div className="flex justify-end items-center space-x-1 rounded-md border">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-r-none"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit {product.name}</span>
                  </Button>
                  <Separator orientation="vertical" className="h-[20px]" />
                  <Button variant="ghost" size="icon" className="rounded-none">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">Hide {product.name}</span>
                  </Button>
                  <Separator orientation="vertical" className="h-[20px]" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-l-none"
                  >
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete {product.name}</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
