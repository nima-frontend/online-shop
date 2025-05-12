export type ProductProps = {
    id:string;
    category:string;
    name:string;
    slug:string;
    images:string[];
    options:{
        model:string[];
    };
    price:number;
    discountPrice:null | number | undefined;
    description:string;

}