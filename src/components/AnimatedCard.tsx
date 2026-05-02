import { motion } from 'framer-motion';
import { cardHoverVariants } from '../lib/animations';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  return (
    <motion.div
      variants={cardHoverVariants}
      initial="initial"
      whileHover="hover"
      className={className}
    >
      {children}
    </motion.div>
  );
}
