import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import DeliveryInfo from "@/components/DeliveryInfo"

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <main>
        <Hero />
        <Services />
        <About />
        <DeliveryInfo />
      </main>
    </div>
  );
};

export default Index;
