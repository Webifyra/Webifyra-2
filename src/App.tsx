import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { HomePage } from './pages/HomePage';
import { AmazonServicesPage } from './pages/services/AmazonServicesPage';
import { ShopifyServicesPage } from './pages/services/ShopifyServicesPage';
import { MetaAdsPage } from './pages/services/MetaAdsPage';
import { SocialMediaPage } from './pages/services/SocialMediaPage';
import { WebDevelopmentPage } from './pages/services/WebDevelopmentPage';
import { UGCContentPage } from './pages/services/UGCContentPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show loading screen on initial load
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && showContent && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Router>
            <div className="min-h-screen bg-white">
              <Header />
              <main className="pt-20">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services/amazon" element={<AmazonServicesPage />} />
                  <Route path="/services/shopify" element={<ShopifyServicesPage />} />
                  <Route path="/services/meta-ads" element={<MetaAdsPage />} />
                  <Route path="/services/social-media" element={<SocialMediaPage />} />
                  <Route path="/services/web-development" element={<WebDevelopmentPage />} />
                  <Route path="/services/ugc-content" element={<UGCContentPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </motion.div>
      )}
    </>
  );
}

export default App;