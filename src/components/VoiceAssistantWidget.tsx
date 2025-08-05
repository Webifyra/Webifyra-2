import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Headphones } from 'lucide-react';

export const VoiceAssistantWidget: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Listen for widget load events
    const handleWidgetLoad = () => {
      setIsLoaded(true);
    };

    // Listen for widget errors
    const handleWidgetError = (event: any) => {
      if (event.detail?.error || event.message?.includes('ConversationalAI')) {
        setHasError(true);
        console.warn('Voice assistant temporarily unavailable');
      }
    };

    // Add event listeners
    window.addEventListener('elevenlabs-widget-loaded', handleWidgetLoad);
    window.addEventListener('error', handleWidgetError);
    window.addEventListener('unhandledrejection', handleWidgetError);

    // Cleanup
    return () => {
      window.removeEventListener('elevenlabs-widget-loaded', handleWidgetLoad);
      window.removeEventListener('error', handleWidgetError);
      window.removeEventListener('unhandledrejection', handleWidgetError);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 voice-widget"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden max-w-sm">
        {/* Support Label */}
        <div className="bg-[#022877] px-4 py-2 text-center">
          <span className="text-white font-bold text-sm tracking-wide flex items-center justify-center gap-2">
            <Headphones className="w-4 h-4" />
            24/7 Support
          </span>
        </div>
        
        {/* Voice Agent Container */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="rounded-xl overflow-hidden bg-white shadow-inner border border-gray-100 min-h-[200px] flex items-center justify-center">
            {hasError ? (
              <div className="text-center p-4">
                <MessageCircle className="w-8 h-8 text-[#05ccc2] mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">Voice assistant loading...</p>
                <p className="text-xs text-gray-500">Please refresh if it doesn't appear</p>
              </div>
            ) : (
              <elevenlabs-convai agent-id="agent_8701k1v46r6pf2tsfyd40tx8aqt5"></elevenlabs-convai>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};