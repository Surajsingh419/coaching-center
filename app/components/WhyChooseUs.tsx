'use client'

import { motion } from 'framer-motion'
import { Users, ClipboardList, MessageCircle, Trophy, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Our teachers are experts with 10+ years of experience in coaching for competitive exams.',
  },
  {
    icon: ClipboardList,
    title: 'Small Batch Size',
    description: 'Limited students per batch ensuring personalized attention and better interaction.',
  },
  {
    icon: MessageCircle,
    title: 'Regular Doubt Sessions',
    description: 'Dedicated doubt clearing sessions to ensure no concept remains unclear.',
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Consistent track record of producing top rankers in IIT-JEE and NEET exams.',
  },
]

const additionalBenefits = [
  'Weekly mock tests with detailed analysis',
  'Comprehensive study material',
  'One-on-one mentoring',
  'Parent-teacher meetings',
  'Online test series access',
  'Library and study room facility',
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-50 to-transparent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the best learning environment with focus on individual growth and success
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-10 text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">
              Additional Benefits
            </h3>
            <ul className="space-y-4">
              {additionalBenefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-accent-400" />
                  </div>
                  <span className="text-primary-50">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-accent-400">95%</div>
                <div className="text-primary-100">
                  <div className="font-semibold">Success Rate</div>
                  <div className="text-sm">Students achieving their goals</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
