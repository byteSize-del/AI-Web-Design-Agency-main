import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { HowItWorks } from '../components/HowItWorks';
import { FeaturesChess } from '../components/FeaturesChess';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { AIDemo } from '../components/AIDemo';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Partners />
      <HowItWorks />
      <FeaturesChess />
      <AIDemo />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
    </PageTransition>
  );
};
