import Link from "next/link";
import { ProductProps } from "@/types/product";
import { ToToman } from "@/lib/formatPrice";

export default function ProductCard({product}:{product:ProductProps}){
    return (
        <Link href={`/product/${product.slug}`} key={product.id} className="rounded-md overflow-hidden shadow-md h-88 lg:h-96">
        <div className="overflow-hidden w-full h-4/6">
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"/>
        </div>
        <div className="h-2/6 overflow-hidden text-center py-4 space-y-6">
        <h2 className="text-[var(--color-title-primary)] text-sm lg:text-base ">{product.name}</h2>
        {product.discountPrice?(
            <p className="font-medium">
                <span className="line-through text-gray-600">{ToToman(product.price)}</span> {' '}
                <span className="text-[var(--color-price-primary)]">{ToToman(product.discountPrice)}</span>
            </p>
        ):(
            <p className="text-[var(--color-price-primary)] font-medium">{ToToman(product.price)}</p>
        )}
        </div>
    </Link>
    )
}