import Link from "next/link";

export default function MainBannner() {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mx-5 lg:mx-16 my-6 *:rounded-md *:overflow-hidden'>
        <Link href='/category/انگشتر'>
            <img src="/images/ring.jpg" alt="ring" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
        </Link>
        <Link href='/category/دستبند'>
        <img src="/images/wristband.jpg" alt="wrist band" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </Link>
        <Link href='category/گردنبند'>
        <img src="/images/necklace.jpg" alt="necklace" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
        </Link>
        <Link href='/category/گوشواره'>
        <img src="/images/earings.jpg" alt="earings" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
        </Link>
    </div>
  )
}
