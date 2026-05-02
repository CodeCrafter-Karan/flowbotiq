import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({ name, role, company, quote, rating, image }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-dark-200 rounded-2xl p-6 lg:p-8"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-dark-700 text-base lg:text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-semibold text-dark-950">{name}</p>
          <p className="text-sm text-dark-500">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
