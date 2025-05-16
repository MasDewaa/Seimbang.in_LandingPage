"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Download, AppleIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CtaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-teal-500/5"></div>

      {/* Background elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-64 h-64 rounded-full bg-teal-500/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-border/40 bg-card">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div 
              className="p-8 md:p-12 lg:p-16"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Download seimbang.in today and start your journey toward financial confidence and freedom.
              </p>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2 bg-black hover:bg-black/90 text-white">
                    <AppleIcon className="h-5 w-5" />
                    App Store
                  </Button>
                  <Button size="lg" className="gap-2 bg-black hover:bg-black/90 text-white">
                    <PhoneIcon className="h-5 w-5" />
                    Google Play
                  </Button>
                </div>

                <div className="pt-8 border-t border-border/40">
                  <h3 className="font-semibold mb-4">Get notified about updates</h3>
                  <div className="flex gap-2">
                    <Input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="max-w-xs" 
                    />
                    <Button>Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="bg-gradient-to-br from-teal-500 to-emerald-600 p-16 flex items-center justify-center relative overflow-hidden hidden lg:flex"
              style={{
                opacity: isInView ? 1 : 0,
                transition: 'opacity 0.5s ease 0.2s'
              }}
            >
              {/* Abstract shapes */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 right-10 w-40 h-40 rounded-full border-4 border-white"></div>
                <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border-4 border-white"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white"></div>
              </div>

              <div className="relative z-10 text-white text-center">
                <div className="text-7xl font-bold mb-6">30K+</div>
                <p className="text-xl">Active users already saving money with seimbang.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}