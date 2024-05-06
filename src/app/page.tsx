import Home from "@/components/Home";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Testomonial from "@/components/Testomonial";
import KeyFeatures from "@/components/KeyFeatures";
import Footer from "@/components/Footer";
import Section3Mobile from "@/components/Section3Mobile";


export default function Body() {
  return (
    <main className="bg-white mx-auto container w-full min-h-screen">
      <Home />
      <Section2 />
      <Section3 />
      <Section3Mobile />
      <Testomonial />
      <KeyFeatures />
      <Footer />
    </main>
  );
}
