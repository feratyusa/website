import Footer from "@/components/Footer";
import HeaderCard from "@/components/HeaderCard";
import Navbar from "@/components/Navbar";
import PortofolioContents from "@/components/PortofolioContents";

export default function Home() {  
  return (
    <main className="bg-slate-800 text-white overflow-hidden">
      <Navbar />
      <HeaderCard />
      <PortofolioContents id="Portofolio"/>
      <Footer />
    </main>
  );
}
