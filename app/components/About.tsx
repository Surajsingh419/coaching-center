'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Users, Target } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Quality Education',
    description: 'Comprehensive study material and structured curriculum designed by experts.',
  },
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Learn from highly qualified teachers with years of teaching experience.',
  },
  {
    icon: Target,
    title: 'Proven Results',
    description: 'Track record of producing top rankers in IIT-JEE and NEET examinations.',
  },
  {
    icon: Award,
    title: 'Personalized Attention',
    description: 'Small batch sizes ensuring individual attention to every student.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold mb-2">Excellence in Education</h3>
                  <p className="text-primary-100">Transforming dreams into reality since 2014</p>
                </div>
              </div>
            </div>
            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">10+ Years</div>
                  <div className="text-sm text-gray-500">Of Excellence</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-500">Success Stories</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Building Future{' '}
              <span className="gradient-text">Doctors & Engineers</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Momentum Institute Lakhimpur is a premier coaching institute dedicated to shaping the careers of aspiring students. With our experienced faculty, comprehensive study materials, and student-centric approach, we have been helping students achieve their dreams of getting into prestigious medical and engineering colleges.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our focus on quality education, regular assessments, and personalized attention has made us one of the most trusted coaching institutes in Lakhimpur and surrounding areas.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
