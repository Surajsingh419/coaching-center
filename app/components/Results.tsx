'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const stats = [
  { number: '500+', label: 'Students Selected', suffix: '' },
  { number: '50+', label: 'Top 1000 Ranks', suffix: '' },
  { number: '95%', label: 'Success Rate', suffix: '' },
  { number: '10+', label: 'Years of Excellence', suffix: '' },
]

const testimonials = [
  {
    name: 'Rahul Sharma',
    rank: 'AIR 247 in JEE Advanced',
    quote: 'Momentum Institute transformed my preparation. The faculty guidance and regular tests helped me achieve my dream IIT.',
    course: 'IIT-JEE',
  },
  {
    name: 'Priya Patel',
    rank: 'NEET Score 685',
    quote: 'The personalized attention and doubt sessions were game changers. Thank you for helping me get into medical college!',
    course: 'NEET',
  },
  {
    name: 'Amit Kumar',
    rank: 'AIR 892 in JEE Main',
    quote: 'Best coaching experience in Lakhimpur. The study material and test series are top-notch. Highly recommended!',
    course: 'IIT-JEE',
  },
]

export default function Results() {
  return (
    <section id="results" className="section-padding bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-500/20 text-accent-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Achievements
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Proven <span className="text-accent-400">Results</span> & Success Stories
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our students consistently achieve top ranks in competitive examinations
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What Our <span className="text-accent-400">Students</span> Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-accent-400 mb-4" />
              <p className="text-gray-200 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-400 text-accent-400" />
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-accent-400 text-sm">{testimonial.rank}</div>
                <div className="text-gray-400 text-xs mt-1">{testimonial.course}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
