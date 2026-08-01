import React from 'react';
import { NeonBackground } from '../components/NeonBackground';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

interface HomeProps {
  onScrollToSection?: (section: string) => void;
}

export const Home: React.FC<HomeProps> = () => {
  useDocumentTitle(
    'Luukr - Discover. Swipe. Everything. | Luxury Marketplace',
    'Luukr is the spatial marketplace and social network connecting people with high-value listings. Discover luxury homes, penthouses, cars, timepieces, and meaningful connections worldwide.'
  );
  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLaunchWeb={handleLaunchWeb} />
      
      <main className="flex-1 relative z-10 flex flex-col items-center justify-center w-full min-h-[calc(100vh-5rem)] overflow-hidden">
        <NeonBackground />
        <Hero onLaunchWeb={handleLaunchWeb} />
      </main>
      
      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
