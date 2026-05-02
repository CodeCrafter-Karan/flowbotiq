import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    id: 'gst-invoice',
    title: 'GST Invoice Generator Template',
    description: 'Pre-built Excel template with VBA to auto-generate GST invoices. Save hours on invoicing.',
    icon: '📊',
    category: 'Excel',
  },
  {
    id: 'automation-checklist',
    title: 'Automation Readiness Checklist',
    description: '20 questions to determine if your business is ready for automation. Get a score and recommendations.',
    icon: '✅',
    category: 'Strategy',
  },
  {
    id: 'power-automate-flows',
    title: 'Power Automate Starter Pack',
    description: '5 ready-to-import flows for SMBs: invoice routing, team notifications, data sync, and more.',
    icon: '⚡',
    category: 'Power Automate',
  },
  {
    id: 'website-checklist',
    title: 'Website Launch Checklist',
    description: '30 things to verify before going live: SEO, performance, security, analytics, and UX.',
    icon: '📋',
    category: 'Website',
  },
  {
    id: 'excel-vba-guide',
    title: 'Excel VBA for Beginners Guide',
    description: 'Step-by-step guide to automating repetitive Excel tasks. No programming experience needed.',
    icon: '📚',
    category: 'Excel',
  },
  {
    id: 'power-apps-guide',
    title: 'Building Your First Power App',
    description: 'Complete walkthrough: create a data collection app in minutes using Power Apps canvas designer.',
    icon: '🎨',
    category: 'Power Apps',
  },
];

export default function Resources() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="font-syne text-3xl lg:text-4xl font-bold text-dark-950 mb-4">
          Free Resources & Templates
        </h2>
        <p className="text-dark-600 text-lg max-w-2xl">
          Start building today with our free templates, guides, and checklists. No email required.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-dark-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-4xl">{resource.icon}</span>
              <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                {resource.category}
              </span>
            </div>

            <h3 className="font-syne font-semibold text-lg text-dark-950 mb-2 group-hover:text-accent transition-colors">
              {resource.title}
            </h3>

            <p className="text-dark-600 text-sm mb-6 leading-relaxed">
              {resource.description}
            </p>

            <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
              <Download size={16} />
              <span>Get Free Access</span>
              <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
