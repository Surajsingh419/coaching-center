'use client'

import { motion } from 'framer-motion'
import { Atom, Stethoscope, BookOpen, Clock, ArrowRight } from 'lucide-react'

const courses = [
  {
    icon: Atom,
    title: 'IIT-JEE Preparation',
    description: 'Comprehensive coaching for JEE Main & Advanced with focus on Physics, Chemistry & Mathematics. Foundation and crash courses available.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    features: ['Complete PCM Coverage', 'Mock Tests', 'Doubt Sessions'],
  },
  {
    icon: Stethoscope,
    title: 'NEET Preparation',
    description: 'Specialized medical entrance coaching with in-depth coverage of Physics, Chemistry, Biology. Proven track record of selections.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    features: ['Biology Mastery', 'NCERT Focus', 'Weekly Tests'],
  },
  {
    icon: BookOpen,
    title: 'Class 11-12 Foundation',
    description: 'Strong foundation courses for Class 11-12 students covering board exams and building base for competitive examinations.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    features: ['Board + Competitive', 'Concept Clarity', 'Regular Practice'],
  },
  {
    icon: Clock,
    title: 'Dropper Batch',
    description: 'Intensive one-year program for repeaters with focused approach on weak areas and extensive practice for guaranteed results.',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    features: ['Intensive Program', 'Personalized Plan', 'Result Guaranteed'],
  },
]

export default function Courses() {
  return (
    <section id="courses" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-accent-100 text-accent-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Courses
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Courses We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of specialized courses designed to help you excel in competitive examinations
          </p>
        </motion.div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 ${course.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <course.icon className={`w-7 h-7 ${course.color.replace('from-', 'text-').replace('to-', '').split(' ')[0].replace('-500', '-600')}`} />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${course.bgColor} ${course.color.replace('from-', 'text-').replace('to-', '').split(' ')[0].replace('-500', '-700')}`}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#admission"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#admission')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-primary-600 font-semibold group/link"
              >
                Enroll Now
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
