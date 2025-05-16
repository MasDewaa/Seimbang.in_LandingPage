"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/90 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-[0.02]">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-4 md:px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl text-foreground">seimbang.in</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:flex">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 px-4 pt-16 md:pt-24 lg:pt-32 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        <motion.div 
          className="text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Manage Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600">Money</span> With Confidence
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
            Take control of your finances with simple tracking, smart budgeting, and actionable insights to reach your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700">
              Download App <Download className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Learn More <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                  <Image
                  src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                  alt={`User ${i}`}
                  width={32}
                  height={32}
                  unoptimized
                />

                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">10,000+</span> happy users
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ 
            transform: `translateY(${scrollY * 0.05}px)` 
          }}
        >
          <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[640px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-black bg-black">
            <Image
              src="https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Seimbang.in App"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-3xl"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl"></div>
          </div>
          <div className="absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute -left-32 top-1/2 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"></div>
        </motion.div>
      </div>

      {/* Brands */}
      <div className="relative z-10 mt-20 md:mt-32 px-4 mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">TRUSTED BY LEADING COMPANIES</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {['Stripe', 'Airbnb', 'Spotify', 'Amazon', 'Microsoft'].map((brand) => (
            <div key={brand} className="text-muted-foreground/50 font-semibold text-lg md:text-xl">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}