import ProductListTable from "./_components/product-list";
import ProductsHeader from "./_components/products-header";

export default function Home() {
  return (
    <div className="h-full  w-full px-4">
      <div className="border rounded-md bg-accent/10 border-border/40 my-1">
        <ProductsHeader />
        <ProductListTable />
      </div>
    </div>
  );
}
