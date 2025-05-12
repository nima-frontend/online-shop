'use client'

import { Close } from "@mui/icons-material"
import Link from "next/link"
type OffCanvasProps = {
    isOpen:boolean
    handleOffCanvas:() => void
}
export default function OffCanvas({isOpen,handleOffCanvas}:OffCanvasProps){
    return(
        <div className={`w-full h-full fixed top-0 right-0 z-50 bg-white ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div className="w-full flex justify-end p-8">
        <button onClick={handleOffCanvas} className="cursor-pointer">
        <Close fontSize="medium" />
        </button>
        </div>
       <ul className="flex flex-col text-gray-700 bg-gray-100 justify-center items-center *:p-4 font-bold">
            <li><Link href='/category/گردنبند' onClick={handleOffCanvas}>گردنبند</Link></li>
            <li><Link href='/category/دستبند' onClick={handleOffCanvas}>دستبند</Link></li>
            <li><Link href='/category/انگشتر' onClick={handleOffCanvas}>انگشتر</Link></li>
            <li><Link href='/category/گوشواره' onClick={handleOffCanvas}>گوشواره</Link></li>
            <li><Link href='/category/پک' onClick={handleOffCanvas}>پک انگشتر</Link></li>
            <li><Link href='/category/ست' onClick={handleOffCanvas}>ست</Link></li>
            <li><Link href='/category/ساعت' onClick={handleOffCanvas}>ساعت</Link></li>
            <li><Link href='/contact' onClick={handleOffCanvas}>تماس با ما</Link></li>
        </ul>
        </div>
    )
}