import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ParallaxSlideProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'light' | 'dark';
  isFirst?: boolean;
  id?: string;
}

export const ParallaxSlide: React.FC<ParallaxSlideProps> = ({
  children,
  className = "",
  theme = 'light',
  isFirst = false,
  id
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // This hook tracks the scroll progress of the container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create a subtle parallax effect for content inside
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Opacity and Scale: If it's the first section, force it to be visible immediately.
  // Otherwise, use the scroll-based transform.
  const opacity = useTransform(
    scrollYProgress,
    isFirst ? [0, 0, 1] : [0, 0.2, 1],
    [1, 1, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    isFirst ? [0, 0, 1] : [0, 0.2, 1],
    [1, 1, 1]
  );

  // For non-first slides, we want a fade-in effect.
  // Since useTransform is static based on the range, we can use a conditional check inside style or use separate values.
  const dynamicOpacity = isFirst ? 1 : opacity;
  const dynamicScale = isFirst ? 1 : scale;
  const dynamicY = isFirst ? 0 : y;

  const bgColor = theme === 'dark' ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900';
  const borderColor = theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200';

  return (
    <div id={id} ref={containerRef} className={`relative min-h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden ${bgColor} ${borderColor} border-b snap-start snap-always`}>
      <motion.div
        style={{ y: dynamicY, scale: dynamicScale, opacity: dynamicOpacity }}
        className={`w-full max-w-[1440px] h-full flex flex-col justify-center ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode, subtitle?: string, theme?: 'light' | 'dark' }> = ({ children, subtitle, theme = 'light' }) => (
  <div className="mb-16 border-l-2 border-current pl-8">
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-lg md:text-xl tracking-[0.2em] uppercase mb-4 font-bold"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
    >
      {children}
    </motion.h2>
  </div>
);

export const ContentGrid: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
    {children}
  </div>
);

export const Card: React.FC<{ title: string; children: React.ReactNode; index?: number; theme?: 'light' | 'dark' }> = ({ title, children, index = 0, theme = 'light' }) => {
  const borderColor = theme === 'dark' ? 'border-zinc-700' : 'border-black';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col h-full border-t ${borderColor} pt-6`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-lg md:text-xl font-light opacity-90 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
};