import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({ children, text }: { children: React.ReactNode, text: string }) {
  const [show, setShow] = useState(false);
  return (
    <span className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      tabIndex={0}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 rounded-xl bg-pink-600 text-white text-xs shadow-lg whitespace-pre-line"
            style={{ minWidth: 180, pointerEvents: 'none' }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}