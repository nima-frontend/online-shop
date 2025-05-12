import Box from "./Box";
const BoxData = [
    {title1:'خریدی مطمئن...',title2:'"پرداخت امن"',imgSrc:'/images/icon_payment.png',imgAlt:'safe payment'},
    {title1:'ارسال فوری به سراسر کشور ...',title2:'"ارسال سریع"',imgSrc:'/images/icon_ship.png',imgAlt:'fast express'},
    {title1:'محصولاتی متنوع و با کیفیت...',title2:'"تنوع محصولات"',imgSrc:'/images/icon_ring.png',imgAlt:'variety'},
    {title1:'عرضه کننده بهترین برند...',title2:'"انواع برند"',imgSrc:'/images/icon_necklace.png',imgAlt:'brandings'},
]



export default function HomeBoxes() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-4 lg:mx-16">
        {BoxData.map((box,index)=>(
            <Box 
            key={index}
            title1={box.title1}
            title2={box.title2}
            imgSrc={box.imgSrc}
            imgAlt={box.imgAlt}
            />
        ))}
    </div>
  )
}
