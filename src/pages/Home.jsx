import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";

// Core content shown above-the-fold
import HeroSection from "../components/hero/HeroSection";

// Lazy-loaded sections
const AboutSection = lazy(() => import("../components/about/AboutSection"));
const ProductsSection = lazy(() =>
  import("../components/products/ProductsSection")
);
const QuoteCTASection = lazy(() =>
  import("../components/quote/QuoteCTASection")
);
const TestimonialsSection = lazy(() =>
  import("../components/testimonials/TestimonialsSection")
);
const ContactSection = lazy(() =>
  import("../components/contact/ContactSection")
);
const WhatsAppFloatButton = lazy(() =>
  import("../components/whatsapp_btn/WhatsAppFloatButton")
);

const Home = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Accida Insurance Agency | Trusted Motor, Health & PA Insurance in
          Kenya
        </title>
        <meta
          name="description"
          content="Get affordable and reliable Motor, Health, and Personal Accident insurance from Accida Insurance Agency in Kenya. Trusted by thousands. Request your quote today."
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <HeroSection />

      {/*  Lazy-loaded sections below the fold */}
      <Suspense
        fallback={
          <div className="text-center py-20 text-blue-600 font-medium">
            Loading content...
          </div>
        }
      >
        <AboutSection />
        <ProductsSection />
        <QuoteCTASection />
        <TestimonialsSection />
        <ContactSection />
        <WhatsAppFloatButton />
      </Suspense>
    </>
  );
};

export default Home;
