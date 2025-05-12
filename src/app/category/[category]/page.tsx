import { mockProducts } from "@/lib/mockData";
import { ProductProps } from "@/types/product";
import Title from "@/app/components/modules/Title";
import ProductCard from "@/app/components/modules/ProductCard";
import notFound from "@/app/not-found";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

function getProductByCategory(category: string): ProductProps[] {
  const decodedCategory = decodeURIComponent(category);
  return mockProducts.filter((p) => p.category === decodedCategory);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const products = getProductByCategory(category);

  if (!products || products.length === 0) return notFound();

  return (
    <>
      <Title title={`دسته بندی ${decodeURIComponent(category)}`} />
      <div className="p-4 my-6 lg:mx-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <ProductCard key={`${product.id}-${product.category}`} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const uniqueCategories = Array.from(new Set(mockProducts.map((p) => p.category)));
return uniqueCategories.map((category) => ({
  category, 
}));
}
