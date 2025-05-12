import Link from "next/link";

export default function SecondaryBanner() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-3 md:grid-rows-1 gap-3 mx-5 lg:mx-16 my-14 *:overflow-hidden *:rounded-md">
    <Link href='/category/پک' className="col-span-2 lg:col-span-1 row-span-2  lg:row-span-1">
    <img src="/images/ring_pack.jpg" alt="ring pack" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
    </Link>
    <Link href='/category/ست'>
    <img src="/images/jwerleyset.jpg" alt="jwerley set" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
    </Link>
    <Link href='category/ساعت'>
    <img src="/images/watch.jpg" alt="watch" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"/>
    </Link>
</div>
  )
}
