import React from 'react';
import { motion } from 'framer-motion';

export const VoiceAssistantWidget: React.FC = () => {
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
          <span className="text-white font-bold text-sm tracking-wide">
            24/7 Support
          </span>
        </div>
        
        {/* Voice Agent Container */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="rounded-xl overflow-hidden bg-white shadow-inner border border-gray-100">
            <elevenlabs-convai agent-id="agent_8701k1v46r6pf2tsfyd40tx8aqt5"></elevenlabs-convai>
          </div>
        </div>
      </div>
    </motion.div>
  );
};