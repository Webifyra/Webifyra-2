import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Headphones } from 'lucide-react';

export const VoiceAssistantWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Show widget after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Listen for ElevenLabs widget errors
    const handleError = (event: any) => {
      if (event.detail && event.detail.includes('Cannot fetch config')) {
        setHasError(true);
      }
    };

    window.addEventListener('elevenlabs-error', handleError);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('elevenlabs-error', handleError);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="voice-widget fixed bottom-6 right-6 z-50 max-w-xs"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Support Label */}
        <div className="bg-[#022877] px-4 py-2 flex items-center justify-center space-x-2">
          <Headphones className="h-4 w-4 text-white" />
          <span className="text-white font-bold text-sm">24/7 Support</span>
        </div>
        
        {/* Voice Assistant Container */}
        <div className="p-4 min-h-[120px] flex items-center justify-center">
          {hasError ? (
            <div className="text-center text-gray-600">
              <p className="text-sm mb-2">Voice assistant loading...</p>
              <p className="text-xs text-gray-500">Please refresh if needed</p>
            </div>
          ) : (
            <div className="w-full">
              <elevenlabs-convai agent-id="agent_8701k1v46r6pf2tsfyd40tx8aqt5"></elevenlabs-convai>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};