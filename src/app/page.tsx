"use client";
import React from "react";
import useHashScroll from "@/hooks/useHashScroll";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import ProfitDefinitionSection from "@/components/ProfitDefinition/ProfitDefinitionSection";
import ProfitAnalyticsSection from "@/components/ProfitAnalysis/ProfitAnalyticSection";
import Scenario from "@/components/Scenario/Scenario";
import Interface from "@/components/AppView/Interface";

const Page: React.FC = () => {
  useHashScroll();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute top-1/4 -right-32 w-80 h-80 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-purple-600 blur-3xl"></div>
      </div>

      <Header />
      <Hero />
      <Features />
      <Scenario />
      <ProfitDefinitionSection />
      <ProfitAnalyticsSection />
      <Interface />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Page;
