import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { StackSection } from './components/StackSection';
import { Testimonials } from './components/Testimonials';
import { ClosingSection } from './components/ClosingSection';
import { FinalAction } from './components/FinalAction';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';
import { AlertTriangle } from 'lucide-react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 59, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-traffic-yellow selection:text-black pb-20 md:pb-0">
      {/* Top Warning Banner */}
      <div className="bg-traffic-black text-traffic-yellow text-center py-2 px-4 font-bold text-xs md:text-sm uppercase tracking-wider flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span className="truncate">Nova lei em vigor: CNH Gratuita liberada</span>
        <AlertTriangle className="w-4 h-4 shrink-0" />
      </div>

      <Hero />
      <Benefits />
      <StackSection />
      <Testimonials />
      <ClosingSection timeLeft={timeLeft} />
      <FinalAction />
      <Footer />
      <StickyCTA />
    </div>
  );
}