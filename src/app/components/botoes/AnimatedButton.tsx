import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type AnimatedButtonProps = HTMLMotionProps<"button">;

export default function AnimatedButton({ children, ...props }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}