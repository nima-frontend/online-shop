export function ToToman(price:number):string{
const tomanPrice = price * 1000;
return tomanPrice.toLocaleString('fa-IR') + 'تومان';
}