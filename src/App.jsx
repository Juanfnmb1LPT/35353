import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SmsDemo from "./components/SmsDemo";
import ValueGrid from "./components/ValueGrid";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => setDemoOpen(true);
  const closeDemo = () => setDemoOpen(false);

  return (
    <>
      <Navbar onOpenDemo={openDemo} />
      <Hero onOpenDemo={openDemo} />
      <HowItWorks />
      <SmsDemo onOpenDemo={openDemo} />
      <ValueGrid />
      <FinalCTA onOpenDemo={openDemo} />
      <Footer />
      <DemoModal open={demoOpen} onClose={closeDemo} />
    </>
  );
}
