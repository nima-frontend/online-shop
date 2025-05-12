'use client'
import { ToToman } from "@/lib/formatPrice";
import { useBasketStore } from "@/store/basket";
import { Minus, Plus, Trash2 } from "@deemlol/next-icons";
export default function PayoutPage(){
    const { items , clearBasket,increaseQuantity,removeItem,decreaseQuantity } = useBasketStore();
    
    const total = items.reduce(
        (sum, item) =>
            sum + (item.discountPrice || item.price) * item.quantity,0
    );
    return (
        <div className="w-full">
        {items.length === 0 ? (
          <div className="w-[90%] mx-auto">
              <div className="w-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] rounded p-5">
                <p className="text-sm font-light text-center">محصولی در سبد خرید وجود ندارد</p>
              </div>
              <div>
              <div className="flex justify-between mx-auto lg:ml-0 mt-6 max-w-96 border-t border-gray-300 py-4 lg:border-b">
                <span className="text-[var(--color-price-primary)]">جمع سبد خرید:</span>
                <span>۰ تومان</span>
              </div>
              </div>
          </div>
        ) : (
          <>
            <ul>
              <div className="w-[90%] mx-auto hidden px-4 md:flex mb-4">
                <h4 className="w-8/12">محصول</h4>
                <h4 className="w-2/12">جمع قیمت</h4>
                <h4 className="w-2/12">تعداد</h4>
              </div>
              {items.map((item) => (
                <li 
                 key={`${item.id}-${item.option}`}
                 className="mb-2 p-4 flex flex-wrap items-start md:items-center w-[90%] mx-auto shadow-[0_5px_15px_rgba(0,0,0,0.15)] rounded font-light text-sm space-y-6 md:space-y-0">
                  <div className="w-2/12 md:w-1/12">
                  <img src={item.image} alt={item.name} 
                  className="w-15 h-15 rounded"
                  />
                  </div>
                  <div className="w-10/12 md:w-7/12 flex flex-wrap pr-3">
                    <span className="w-full">{item.name}</span>
                    <span className="w-full">{item.description}</span>
                    <span className="w-full text-[var(--color-primary-800)]">{item.option}</span>
                  </div>
                  <div className="flex w-full md:w-2/12 justify-between">
                    <span className="md:hidden">جمع قیمت:</span>
                    {item.discountPrice?(
                    <div className="flex flex-wrap text-left md:text-right *:w-full">
                      <span>{ToToman(item.discountPrice*item.quantity)}</span>
                      <span className="ml-2 text-red-400 font-bold">{ToToman((item.price - item.discountPrice)* item.quantity)} تخفیف</span>
                    </div>
                    ):(
                      <span>{ToToman(item.price*item.quantity)}</span>                   
                    )}
                  </div>
                  <div className="flex w-full md:w-2/12 justify-between">
                    <span className="md:hidden">تعداد:</span>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 border p-1 rounded border-gray-200">
                      <Plus size={16}  
                      onClick={() => increaseQuantity(item.id, item.option)}/>
                      <span>{item.quantity}</span>
                      <Minus size={16} onClick={()=>decreaseQuantity(item.id,item.option)} />
                      </div>
                      <Trash2 size={16} onClick={()=>{removeItem(item.id,item.option);
                        alert('محصول از سبد خرید شما حذف شد')}}
                         />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-[90%] mx-auto">
            <div className="w-full flex justify-between mx-auto lg:ml-0 mt-6 max-w-96 border-t border-gray-300 py-4 lg:border-b">
                <span className="text-[var(--color-price-primary)]">جمع سبد خرید:</span>
                <span className="font-bold">{ToToman(total)}</span>
              </div>
            </div>
            <div className="w-[90%] mx-auto flex justify-center lg:justify-end">
            <button onClick={()=>{
              clearBasket();
              alert('ممنون از سفارش شما')
            }} className="mt-4 mb-8 px-8 py-2 bg-[var(--color-primary)] text-white rounded">
              ثبت سفارش
            </button>
            </div>
          </>
        )}
      </div>
    )
}