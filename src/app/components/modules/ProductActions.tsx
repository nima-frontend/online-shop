'use client';

import { useState } from 'react';
import { useBasketStore } from '@/store/basket';
import ProductSelect from './ProductSelect';
import { Button } from '@mui/material';
import { ProductProps } from '@/types/product';

type ProductActionProps = {
  product: ProductProps;
};

export default function ProductAction({ product }: ProductActionProps) {
  const [selectedOption, setSelectedOption] = useState(product.options.model[0]);
  const addItem = useBasketStore((state) => state.addItem);

  return (
    <div className="w-[90%] md:w-1/2">
      <ProductSelect
        options={product.options.model}
        selected={selectedOption}
        onChange={(val) => setSelectedOption(val)}
      />
      
      <div className="bg-[var(--color-primary-green)] w-full md:w-56 p-3 my-6 rounded text-white">
         <button className="cursor-pointer w-full h-full font-bold text-lg"
          onClick={() =>
         { addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            discountPrice: product.discountPrice,
            image: product.images[0],
            description:product.description,
            option: selectedOption,
          });
          alert('محصول به سبد خرید اضافه شد')
        }
        }>اضافه به سبد خرید</button>
      </div>
    </div>
  );
}
