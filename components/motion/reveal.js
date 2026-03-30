"use client";

import { motion } from "framer-motion";

const defaultEase = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  x = 0,
  scale = 1,
  duration = 0.7,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: defaultEase }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.12,
  ...props
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 24,
  x = 0,
  duration = 0.65,
  ...props
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration, ease: defaultEase },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
