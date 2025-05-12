'use client'

import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { ProductProps } from "@/types/product";
import ProductCard from "./ProductCard";


export default function ProductGrid(){
    const [page, setPage] = useState(1);
    const { products,total,loading } = useProducts(page,8);
    const totalPages = Math.ceil(total/8);


    return(
        <div className="p-4 my-6 lg:mx-12">
            {loading?(
                <p className="text-center">Loading...</p>
            ):(
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {products.map((product:ProductProps)=>(
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
                    


            <div className="w-full flex flex-wrap justify-center items-center p-4 md:justify-between gap-3 mt-6 bg-[#EDEEF4] rounded-md">
                <button
                onClick={()=>setPage((prev)=>Math.max(prev - 1,1))}
                disabled={page===1}
                className="w-full md:w-44 px-4 py-2 text-white rounded bg-[var(--color-primary)] disabled:opacity-50"
                >
                    صفحه قبلی
                </button>
                <div className="w-full md:w-1/4 mx-4 flex justify-center items-center gap-2">
                <span>صفحه</span>
                    <input type="number" 
                    value={page}
                    onChange={(e)=>{
                        const value = Math.max(1,Math.min(totalPages,Number(e.target.value)));
                        setPage(value)
                    }}
                    className=" h-10 text-center bg-white border border-[#BBC3CE] rounded w-22 "
                    min={1}
                    max={totalPages}
                    />
                    <span>از {totalPages}</span>
                </div>

                <button
                onClick={()=>setPage((prev)=>Math.min(prev + 1,totalPages))}
                disabled={page===totalPages}
                className="w-full md:w-44 px-4 py-2 text-white rounded bg-[var(--color-primary)] disabled:opacity-50"
                >
                    بعدی
                </button>
            </div>

        </div>
        
    )
}