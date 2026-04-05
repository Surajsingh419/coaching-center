'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react'

export default function Contact() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello, I want to enquire about coaching classes')
    window.open(`https://wa.me/919569247168?text=${message}`, '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+919569247168', '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our center or reach out to us for any queries
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Visit Our Center</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">
                    MOSARAM BUILDING, BELOW RAILWAY OVERBRIDGE,<br className="hidden sm:block" />
                    OLD PETROLPUMP, Punjabi Colony Rd,<br className="hidden sm:block" />
                    Maharaj Nagar, Lakhimpur,<br className="hidden sm:block" />
                    Uttar Pradesh 262701
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Call Us</h3>
                  <p className="text-gray-600 mb-2 sm:mb-3 text-sm sm:text-base">
                    Mon-Sat, 9:00 AM - 7:00 PM
                  </p>
                  <button
                    onClick={handlePhoneClick}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm sm:text-base break-all"
                  >
                    +91 95692 47168
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </div>

            {/* Timing Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Working Hours</h3>
                  <div className="space-y-1 text-gray-600 text-sm sm:text-base">
                    <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 sm:gap-3"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Chat on WhatsApp</span>
            </button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="h-full min-h-[400px]"
          >
            <div className="bg-gray-100 rounded-2xl overflow-hidden h-full shadow-inner border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.1234567890123!2d80.78!3d27.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999abcdef123456%3A0x789abcdef1234567!2sLakhimpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Momentum Institute Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
