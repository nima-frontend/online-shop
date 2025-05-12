import Image from "next/image"

type BoxProps = {
    title1: string;
    title2:string;
    imgSrc: string;
    imgAlt:string;
}


export default function Box({title1,title2,imgSrc,imgAlt}:BoxProps) {
  return (
            <div className="rounded-md bg-[#ffff] shadow-[0_0_20px_rgba(0,0,0,0.1)] relative w-full mx-auto font-light h-44 text-center space-y-8 p-8 mb-8 group">
                <h4>{title1}</h4>
                <h4 className="text-[var(--color-primary-400)] font-bold">{title2}</h4>
                <Image src={imgSrc} width={60} height={60} alt={imgAlt} unoptimized className="absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2 transition-transform duration-300 group-hover:scale-125">
                </Image>
            </div>
  )
}
