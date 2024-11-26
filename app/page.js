import Banner from "@/components/Banner";
import BannerDown from "@/components/BannerDown";
import Brands from "@/components/Brands";
import Circle from "@/components/Circle";
import ForBuyer from "@/components/ForBuyer";
import ForSupplier from "@/components/ForSupplier";
import Leading from "@/components/Leading";
import ProductSlider from "@/components/ProductSlider";
import WaytoBuy from "@/components/WaytoBuy";


export default function Home() {
  return (
    <>
    <Banner/>
    <BannerDown/>
    <WaytoBuy/>
    <Circle/>
    <ProductSlider/>
    <Leading/>
    <Brands/>
    <ForBuyer/>
    <ForSupplier/>
    </>
  );
}
