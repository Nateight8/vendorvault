"use client";

import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";

export default function ProductsHeader() {
  return (
    <header
      role="columnheader"
      aria-label="product list header"
      className="flex items-center justify-between shadow-md"
    >
      <div className="px-4 h-16  w-full flex items-center justify-between">
        <div className="">
          <h3 className="font-medium">Product List</h3>
        </div>
        <div className="">
          <Button>
            <IconPlus className="w-4 h-4" /> Add Product
          </Button>
        </div>
      </div>
    </header>
  );
}
