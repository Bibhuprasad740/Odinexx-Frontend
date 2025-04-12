import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import LiveStreams from '../components/LiveStreams';
import FeatureTournaments from '../components/FeatureTournaments';
import PastTournaments from '../components/PastTournaments';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';
import StatsCounter from '../components/StatsCounter';
import CallToAction from '../components/CallToAction';

const Home = () => {

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <HeroSection />
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 bg-cyan-500/10 backdrop-blur-sm">
        <StatsCounter />
      </section>

      {/* Featured Tournaments */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <FeatureTournaments />
      </section>

      {/* Live Streams Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-700/20 to-purple-900/20 backdrop-blur-sm">
        <LiveStreams />
      </section>

      {/* Past Events Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <PastTournaments />
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 sm:px-6 lg:px-8">
        <FAQ />
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-4 px-4 sm:px-6 lg:px-8">
        <Features />
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-cyan-500/10 to-purple-900/30 backdrop-blur-sm">
        <CallToAction />
      </section>

      <Footer />
    </div>
  );
};

export default Home;