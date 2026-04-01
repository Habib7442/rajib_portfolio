import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { motion, AnimatePresence } from 'motion/react';
import { FaMicrophone, FaStop, FaPhoneAlt } from 'react-icons/fa';

// Replace with your Vapi keys from dashboard.vapi.ai
const VAPI_PUBLIC_KEY = '487d321c-5a19-4cc3-a71e-ebc78ff77585'; // Substitute with your public key
const ASSISTANT_ID = '09109acf-b465-4b4d-9df0-1bae4bbb9085';     // Substitute with your assistant ID

const vapi = new Vapi(VAPI_PUBLIC_KEY);

export default function VapiAssistant() {
  const [isCalling, setIsCalling] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    vapi.on('call-start', () => {
      setIsCalling(true);
      setIsConnecting(false);
    });

    vapi.on('call-end', () => {
      setIsCalling(false);
      setIsConnecting(false);
    });

    vapi.on('error', (e) => {
      console.error('Vapi Error:', e);
      setIsConnecting(false);
    });

    return () => {
      vapi.removeAllListeners();
    };
  }, []);

  const toggleCall = () => {
    if (isCalling) {
      vapi.stop();
    } else {
      setIsConnecting(true);
      vapi.start(ASSISTANT_ID);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100]">
      <AnimatePresence>
        {isCalling && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="absolute bottom-20 right-0 bg-navy/90 backdrop-blur-xl p-4 rounded-2xl border border-teal/20 shadow-2xl w-48 text-center mb-4"
          >
            <div className="flex justify-center gap-1 mb-2">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: [8, 20, 8] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1 bg-teal rounded-full"
                />
              ))}
            </div>
            <p className="text-teal text-[10px] font-mono uppercase tracking-widest">
              AI Assistant Speaking...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleCall}
        disabled={isConnecting}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors relative ${
          isCalling 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-teal hover:bg-white text-navy'
        }`}
      >
        {isConnecting ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-6 h-6 border-2 border-navy border-t-transparent rounded-full"
          />
        ) : isCalling ? (
          <FaStop size={20} />
        ) : (
          <div className="flex items-center justify-center">
            <FaPhoneAlt size={22} />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-2 bg-navy/20 rounded-full -z-10"
            />
          </div>
        )}
      </motion.button>
    </div>
  );
}
