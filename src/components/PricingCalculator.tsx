import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

interface PricingOption {
  id: string;
  label: string;
  price: number;
}

const serviceOptions: Record<string, PricingOption[]> = {
  website: [
    { id: 'basic', label: 'Basic (5 pages)', price: 25000 },
    { id: 'pro', label: 'Professional (10 pages)', price: 50000 },
    { id: 'enterprise', label: 'E-commerce', price: 100000 },
  ],
  automation: [
    { id: 'simple', label: 'Simple Excel Macro', price: 10000 },
    { id: 'complex', label: 'Complex VBA Solution', price: 35000 },
    { id: 'enterprise', label: 'Full System Automation', price: 75000 },
  ],
  powerPlatform: [
    { id: 'app', label: 'Single App', price: 40000 },
    { id: 'suite', label: 'App Suite (3 apps)', price: 90000 },
    { id: 'crm', label: 'Full CRM System', price: 150000 },
  ],
};

export default function PricingCalculator() {
  const [selectedService, setSelectedService] = useState<string>('website');
  const [selectedOption, setSelectedOption] = useState<string>('basic');
  const [quantity, setQuantity] = useState(1);

  const options = serviceOptions[selectedService] || [];
  const selectedPrice = options.find(o => o.id === selectedOption)?.price || 0;
  const totalPrice = selectedPrice * quantity;

  return (
    <div className="bg-dark-50 border border-dark-200 rounded-2xl p-8 lg:p-10">
      <h3 className="font-syne font-bold text-2xl text-dark-950 mb-8">
        What's your estimated budget?
      </h3>

      <div className="space-y-8">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-dark-700 mb-4">
            What do you need?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {Object.keys(serviceOptions).map((service) => (
              <button
                key={service}
                onClick={() => {
                  setSelectedService(service);
                  setSelectedOption(serviceOptions[service][0].id);
                }}
                className={`p-4 rounded-lg font-medium transition-all ${
                  selectedService === service
                    ? 'bg-accent text-white'
                    : 'bg-white border border-dark-200 text-dark-700 hover:border-accent'
                }`}
              >
                {service === 'website' && 'Website'}
                {service === 'automation' && 'Excel Automation'}
                {service === 'powerPlatform' && 'Power Apps'}
              </button>
            ))}
          </div>
        </div>

        {/* Option Selection */}
        <div>
          <label className="block text-sm font-semibold text-dark-700 mb-4">
            Package size
          </label>
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedOption === option.id
                    ? 'border-accent bg-accent/5 text-accent'
                    : 'border-dark-200 text-dark-700 hover:border-dark-300'
                }`}
              >
                <input
                  type="radio"
                  name="option"
                  checked={selectedOption === option.id}
                  onChange={() => setSelectedOption(option.id)}
                  className="sr-only"
                />
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-medium">{option.label}</span>
                  <span className="font-semibold">₹{option.price.toLocaleString()}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-semibold text-dark-700 mb-4">
            Quantity
            <span className="ml-1 text-dark-400">
              <HelpCircle size={14} className="inline" title="Number of modules/apps" />
            </span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="5"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="flex-1 h-2 bg-dark-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-lg font-semibold text-accent">{quantity}</span>
          </div>
        </div>

        {/* Total */}
        <motion.div
          key={totalPrice}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.3 }}
          className="bg-white border-2 border-accent rounded-xl p-6 text-center"
        >
          <p className="text-dark-600 text-sm mb-2">Estimated Total</p>
          <p className="font-syne text-4xl font-bold text-accent">
            ₹{totalPrice.toLocaleString()}
          </p>
          <p className="text-dark-500 text-sm mt-2">
            Typical delivery: 4-8 weeks
          </p>
        </motion.div>

        <p className="text-dark-600 text-sm text-center">
          This is an estimate. Final pricing after a free consultation.
        </p>
      </div>
    </div>
  );
}
