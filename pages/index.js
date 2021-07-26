import Hero from '../components/Hero';
// import TwoStep from '../components/TwoStep';
import ExplainTemporal from '../components/ExplainTemporal';
import StackedUseCases from '../components/StackedUseCases';
import CaseStudies from '../components/CaseStudies';
import JoinUs from '../components/JoinUs';
import FAQ from '../components/FAQ';
import FinalQuote from '../components/FinalQuote';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Temporal.io Home</title>
      </Head>
      <Hero />
      {/* <TwoStep /> */}
      <ExplainTemporal />
      <CaseStudies />
      <StackedUseCases />
      <JoinUs />
      <FAQ />
      <FinalQuote />
      <Footer />
    </div>
  );
}
