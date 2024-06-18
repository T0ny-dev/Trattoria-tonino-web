import Header from "./components/Header";
import NavbarMobile from "./components/NavbarMobile";
import Hero from "./components/Hero";
import CardContainer from "./components/CardContainer";
import TwoSectionComponent from "./components/TwoSectionComponent";
import TextWithBackground from "./components/TextWithBackground";
import TwoSectionsLayout from "./components/TwoSectionsLayout";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="main">
      <Header/>
      <NavbarMobile/>
      <Hero></Hero>
      <CardContainer/>
      <TwoSectionComponent/>
      <TextWithBackground/>
      <TwoSectionsLayout/>
      <Banner/>
      <Footer/>
    </div>
  );
}
