import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nagaraj Chittapur | AI & Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Nagaraj Chittapur — AI/ML Developer, Python Developer, and Full Stack Engineer specializing in React, Django, TensorFlow, and production-ready web applications."
        />
        <meta name="keywords" content="Nagaraj Chittapur, AI developer, ML engineer, Python developer, Django, React, Full Stack, portfolio, MCA, Presidency University" />
        <meta name="author" content="Nagaraj Chittapur" />
        <meta property="og:title" content="Nagaraj Chittapur | AI & Full Stack Developer" />
        <meta property="og:description" content="AI/ML and Full Stack Developer building intelligent, scalable web applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nagarajchittapur.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nagaraj Chittapur | AI & Full Stack Developer" />
        <meta name="twitter:description" content="AI/ML and Full Stack Developer building intelligent, scalable web applications." />
        <link rel="canonical" href="https://nagarajchittapur.vercel.app" />
      </Helmet>

      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <CursorGlow />
          <ScrollProgress />
          <Navbar />
          <main>
            <Home />
          </main>
        </>
      )}
    </HelmetProvider>
  );
}

export default App;
