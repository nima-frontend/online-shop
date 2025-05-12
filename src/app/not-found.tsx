import Link from "next/link";

export default function notFound(){
    return(
        <section className="flex flex-col justify-center items-center gap-6 w-full h-screen">
            <h2 className="text-8xl text-white text-shadow-lg text-shadow-gray-300">
                404
            </h2>
            <h3>
            متاسفانه صفحه مورد نظر یافت نشد
            </h3>
            <div>   
                <Link className=" bg-[var(--color-primary-400)] ml-2 rounded-md p-3 text-white" href='/'>
                بازگشت به صفحه اصلی
                </Link>
            </div>
        </section>
    )
}