import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import DeliveryInfo from "@/components/DeliveryInfo"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="delivery">
          <DeliveryInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
