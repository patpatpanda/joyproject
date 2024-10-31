// src/app/page.js
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import QuoteCarousel from '../components/QuoteCarousel/QuoteCarousel';

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <QuoteCarousel />
    </>
  );
}
