import { mockProducts } from "@/lib/mockData"; 
import { ProductProps } from "@/types/product";
import notFound from "@/app/not-found";
import ProductImages from '@/app/components/modules/ProductImages';
import Link from "next/link";
import { ToToman } from "@/lib/formatPrice";
import SocialIcons from "@/app/components/modules/SocialIcons";
import ProductActions from "@/app/components/modules/ProductActions";

async function getProductBySlug(slug: string): Promise<ProductProps | null> {
  const decodedSlug = decodeURIComponent(slug);
  return mockProducts.find(p => p.slug === decodedSlug) || null;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <div className="w-full lg:px-10 flex flex-wrap">
      <ProductImages images={product.images} />

      <div className="w-full md:w-3/5 md:pr-4 text-center md:text-right space-y-6 my-4 md:my-0">
        <div className="w-[90%] text-sm md:text-base gap-4 hidden md:flex">
          <span className="bg-[var(--color-primary)] rounded-xl px-2 text-white">کالای فیزیکی</span>
          <div className="space-x-1.5 text-[var(--color-price-primary)]">
            <Link href='/'>صفحه اصلی</Link>
            <span>/</span>
            <Link href={`/category/${encodeURIComponent(product.category)}`}>{product.category}</Link>
          </div>
        </div>

        <div className="hidden md:block text-2xl font-medium">
          <h2>{product.name}</h2>
        </div>

        <div className="text-[var(--color-primary)] font-bold text-2xl">
          {product.discountPrice ? (
            <p className="flex gap-3 justify-center md:justify-start">
              <span className="line-through text-gray-400 font-light">{ToToman(product.price)}</span>
              <span className="text-gray-300">|</span>
              <span>{ToToman(product.discountPrice)}</span>
            </p>
          ) : (
            <span>{ToToman(product.price)}</span>
          )}
        </div>

        <div>
          <p>حتما مدل محصول را انتخاب کنید</p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          <ProductActions product={product} />
          <SocialIcons />
        </div>

        <div className="text-right w-[90%] mx-auto md:mr-0 mb-10 font-light">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return mockProducts.map(product => ({
    slug: product.slug,
  }));
}
