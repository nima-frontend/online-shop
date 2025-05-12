import AccordionQuestions from "../modules/AccordionQuestions";
import HomeBoxes from "../modules/HomeBoxes";
import MainBannner from "../modules/MainBannner";
import MySwiper from "../modules/MainSwiper";
import ProductGrid from "../modules/ProductGrid";
import SecondaryBanner from "../modules/SecondaryBanner";
import Title from "../modules/Title";

export default function HomePage() {
  return (
    <>
    <MySwiper />
    <Title title="دسته بندی ها" />
    <MainBannner />
    <SecondaryBanner />
    <Title title="جدیدترین محصولات" />
    <ProductGrid />
    <Title title="درباره ما" />
    <HomeBoxes />
    <Title title="سوالات پرتکرار" />
    <AccordionQuestions />
    </>
  )
}
