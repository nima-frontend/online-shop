import Link from "next/link";
import { GitHub } from "@mui/icons-material";
export default function Footer(){
    return(
        <footer className="w-full h-auto bg-[var(--color-primary)] text-slate-800 font-light 2xl:container mx-auto px-4 py-4 flex justify-center items-center flex-wrap">
            <div className="w-full text-center lg:w-3/4 lg:text-right space-y-4">
            <h3>
                درباره سایت
            </h3>
            <p>
            بعد از ثبت سفارشتون بستتون ۱تا۲ روز بعد نهایت ۳ روز بعد تحویل پست داده میشه(بعد از تحویل ب پست کد صادر میشه)
            </p>
            <p>
            کد های رهگیری داخل پیج دوم استوری و در نهایت هایلایت میشه داخل ماهی ک خرید داشتین
            </p>
            <p>مرسی ک ب ما اعتماد دارین ❤️</p>
            <div>
            <Link href='https://github.com/nima-frontend/'>
            <GitHub />
            <span className="mr-2">
            Redesigned by Nima Pourdad based on Sazito
            </span>
            </Link>
            </div>
            <p>
            © ۱۴۰۴ - کلیه حقوق این فروشگاه محفوظ است
            </p>
            </div>
            <div>
            <img src="/images/eNamad.png" alt="eNamad" />
            </div>
        </footer>
    )
}