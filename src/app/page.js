import dynamic from 'next/dynamic';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AboutSection = dynamic(() => import('./components/AboutSection'), {
  ssr: false,
});

const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), {
  ssr: false,
});

const EmailSection = dynamic(() => import('./components/EmailSection'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <HeroSection />
        <div className="container mx-auto px-4 md:px-8 space-y-16 sm:space-y-20">
          <AboutSection />
          <ProjectsSection />
          <EmailSection />
        </div>
      </div>
      <Footer />
    </main>
  );
}
