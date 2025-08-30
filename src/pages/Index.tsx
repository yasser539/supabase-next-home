import HeroSlider from "@/components/HeroSlider"
import About from "@/components/About"
import Brands from "@/components/Brands"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSlider />
        <About />
        <Brands />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
