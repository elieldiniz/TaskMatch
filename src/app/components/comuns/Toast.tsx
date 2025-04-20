'use client'
import { AnimatePresence, motion } from "framer-motion";

type ToastProps = {
  show: boolean;
  message: string;
  icon?: React.ReactNode;
};

export default function Toast({ show, message, icon }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed right-6 bottom-6 z-[100] bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3"
        >
          {icon}
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}