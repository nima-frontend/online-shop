import Footer from "./Footer";
import Header from "./Header";
type LayoutProps = {
    children: React.ReactNode;
}
export default function Layout({children}:LayoutProps){
    return(
        <>
        <Header />
        <main className="w-full min-h-screen mt-16 bg-[#fff] 2xl:container mx-auto font-shabnam">
            {children}
        </main>       
        <Footer />
        </>
    )
}