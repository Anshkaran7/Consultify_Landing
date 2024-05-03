import Home from "@/components/Home";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Testomonial from "@/components/Testomonial";
import KeyFeatures from "@/components/KeyFeatures";
import Footer from "@/components/Footer";


export default function Body() {
  return (
    <main className="bg-white min-h-screen">
      <Home />
      <Section2 />
      <Section3 />
      <Testomonial />
      <KeyFeatures />
      <Footer />
    </main>
  );
}
