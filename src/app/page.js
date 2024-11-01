// src/app/page.js
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import QuoteCarousel from '../components/QuoteCarousel/QuoteCarousel';
import AboutUs from '../components/AboutUs/AboutUs';

import CallToAction from '../components/CallToAction/CallToAction';
export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <QuoteCarousel />
        <AboutUs />
        <CallToAction/>
    </>
  );
}
