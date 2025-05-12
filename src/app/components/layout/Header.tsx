'use client'

import Image from "next/image";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { useEffect, useState } from "react";
import OffCanvas from "./OffCanvas";
import { useBasketStore } from "@/store/basket";

export default function Header(){
    const [isOpen, SetIsOpen] = useState(false)
    const handleOffCanvas = () => SetIsOpen(open => !open)
    const [isFixed,setIsFixed] = useState(false)
    const totalItems = useBasketStore((state)=>
    state.items.reduce((sum,item)=>sum + item.quantity,0)
    );
    useEffect(()=>{
        const handleScroll = () =>{
            const isMobile = window.innerWidth < 1024;
            if(window.scrollY > 300 && isMobile){
                setIsFixed(true);
                
            }else{
                setIsFixed(false)
            }
        }
        window.addEventListener('scroll',handleScroll);
        window.addEventListener('resize',handleScroll);
        return () => {
        window.removeEventListener('scroll',handleScroll);
        window.addEventListener('resize',handleScroll);
        }
    },[])

    return(
        <>
        
        <div className=" mx-auto absolute top-0 left-0 right-0 bg-[var(--color-primary)] h-18 w-full"></div>
        <header className={`mx-auto w-full ${isFixed ? 'fixed  top-3':'relative top-8'} z-40`}>
            <nav className={`border border-gray-300 rounded-md z-40 w-[95%] lg:w-[90%] h-14 lg:h-24 mx-auto flex justify-between items-center px-3 lg:px-10 text-slate-700 ${isFixed? 'backdrop-blur-sm bg-white/80':'backdrop-blur-none bg-white'}`}>
                <div className="flex gap-4">
                <button className="cursor-pointer lg:hidden hover:text-[var(--color-primary)] transition-colors duration-200" onClick={handleOffCanvas}>
                    <MenuIcon />
                </button>
                <div className="w-20">
                    <Link href='/'>
                    <Image src='/images/logo_200.jpg' unoptimized width={45} height={45} alt="logo" className="w-[45px] h-[45px] lg:h-[80px] lg:w-[80px]" />

                    </Link>
                </div>
                </div>
                <div className="flex w-full mr-10">
                    <ul className="hidden lg:flex gap-6 font-light *:hover:bg-slate-800 *:rounded-full *:hover:text-white *:transition-colors *:duration-200 *:p-1.5 ">
                        <li><Link href='/category/گردنبند'>گردنبند</Link></li>
                        <li><Link href='/category/دستبند'>دستبند</Link></li>
                        <li><Link href='/category/انگشتر'>انگشتر</Link></li>
                        <li><Link href='/category/گوشواره'>گوشواره</Link></li>
                        <li><Link href='/category/پک'>پک انگشتر</Link></li>
                        <li><Link href='/category/ست'>ست</Link></li>
                        <li><Link href='/category/ساعت'>ساعت</Link></li>
                        <li><Link href='/contact'>تماس با ما</Link></li>
                    </ul>
                </div>
                <div className="flex gap-6">
                    <button className="cursor-pointer hover:text-[var(--color-primary)] transition-colors duration-200">
                        <SearchIcon sx={{transform:'rotate(90deg)',fontSize:30}} />
                    </button>
                    <Link href='/checkout' className="hover:text-[var(--color-primary)] transition-colors duration-200">
                    <div className="relative">
                    <ShoppingBasketOutlinedIcon sx={{fontSize:25}} />
                    <span className="bg-[var(--color-primary)] px-1.5 rounded-full absolute top-1 -right-6 text-white text-sm">{totalItems}</span>
                    </div>
                    </Link>
                </div>
            </nav>
        </header>
        <OffCanvas isOpen={isOpen} handleOffCanvas={handleOffCanvas} />
        </>
    )
}
