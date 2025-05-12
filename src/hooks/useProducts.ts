import useSWR from 'swr'
import { ProductProps } from '@/types/product';

type ProductRespone = {
    total: number;
    data:ProductProps[];
};

const fetcher = (url:string):Promise<ProductRespone> => fetch(url).then(res => res.json());

export function useProducts(page = 1,limit = 10){
    const { data,error,isLoading } = useSWR<ProductRespone>(
        `/api/products?page=${page}&limit=${limit}`,
        fetcher
    );
    
    return {
        products:data?.data ?? [],
        total:data?.total ?? 0,
        loading:isLoading,
        error,
    };

}