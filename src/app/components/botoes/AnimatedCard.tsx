import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type AnimatedCardProps = HTMLMotionProps<"div">;

export default function AnimatedCard({ children, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}