import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Globe, 
  Lightbulb, 
  BookOpen, 
  ClipboardCheck, 
  GraduationCap,
  Users,
  Target,
  Award,
  Mail,
  Phone,
  ChevronDown,
  BookMarked,
  Building2,
  FileText,
  Shield,
  CreditCard
} from 'lucide-react';

const EAGLE_LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696cd8427607e58b1512baba/2b79b2a71_image_2026-01-18_08-18-59-removebg-preview.png";

const EagleLogo = ({ className = "w-10 h-10" }) => (
  <img src={EAGLE_LOGO_URL} alt="EduOPP Eagle" className={className} />
);


const Section = ({ children, className = "", id = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const GoldDivider = () => (
  <div className="flex items-center justify-center py-8">
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A227]" />
    <div className="w-2 h-2 rotate-45 bg-[#C9A227] mx-3" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A227]" />
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#C9A227]/30"
    >
      <div className="w-16 h-16 rounded-xl bg-[#5D1A2D]/5 flex items-center justify-center mb-6 group-hover:bg-[#5D1A2D] transition-colors duration-500">
        <Icon className="w-8 h-8 text-[#5D1A2D] group-hover:text-[#C9A227] transition-colors duration-500" strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const DetailedServiceSection = ({ title, items, icon: Icon, reverse = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: reverse ? 30 : -30 }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
    >
      <div className="flex-1">
        <div className="inline-block">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2 tracking-tight">{title}</h3>
          <div className="h-0.5 w-full bg-gradient-to-r from-[#C9A227] to-transparent" />
        </div>
        <ul className="mt-6 space-y-4">
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start gap-3"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2.5 flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-[#5D1A2D]/5 flex items-center justify-center flex-shrink-0">
        <Icon className="w-16 h-16 md:w-20 md:h-20 text-[#5D1A2D]/70" strokeWidth={1} />
      </div>
    </motion.div>
  );
};

const WhyCard = ({ icon: Icon, text, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-lg bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#C9A227]" strokeWidth={1.5} />
      </div>
      <p className="text-white/90 leading-relaxed pt-2">{text}</p>
    </motion.div>
  );
};

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <EagleLogo className="w-10 h-10" />
              <div className="leading-tight">
                <span className="text-[#5D1A2D] font-bold text-lg tracking-tight">EDUOPP</span>
                <span className="text-[#C9A227] font-medium text-xs block tracking-widest">CONSULTING</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-[#5D1A2D] transition-colors text-sm font-medium tracking-wide"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-white pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-[#5D1A2D]/3 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#C9A227]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-flex items-center justify-center mb-6">
              <EagleLogo className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[#5D1A2D] font-bold text-3xl md:text-4xl tracking-tight">EDUOPP</span>
            </div>
            <span className="text-[#C9A227] font-semibold text-sm md:text-base tracking-[0.3em]">CONSULTING</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight mb-12 tracking-tight"
          >
            Expanding Access to <span className="text-[#5D1A2D]">American Higher Education</span> Globally
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-[#5D1A2D] text-white font-medium rounded-xl hover:bg-[#4A1424] transition-all duration-300 shadow-lg shadow-[#5D1A2D]/20 hover:shadow-xl hover:shadow-[#5D1A2D]/30"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-[#5D1A2D] text-[#5D1A2D] font-medium rounded-xl hover:bg-[#5D1A2D] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-[#5D1A2D] transition-colors"
            >
              <ChevronDown className="w-8 h-8 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-[#5D1A2D] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.span className="text-[#C9A227] text-sm font-semibold tracking-[0.2em] uppercase">
              Who We Are
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 tracking-tight">About Us</h2>
            <div className="flex justify-center mt-6">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-white/90 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              At <span className="text-[#C9A227] font-semibold">EDUOPP Consulting</span>, we are dedicated to providing higher education professionals, including professors, researchers, and administrators, with the tools and knowledge needed to enhance their academic careers and promote effective, innovative educational practices.
            </p>
            <p className="text-white/80 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Founded and led by experts in academia and higher education, EDUOPP Consulting focuses on bridging the gap between educational systems worldwide, fostering international collaboration, and enhancing the quality of education.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { icon: Award, label: "Founded 2021 in Atlanta, Georgia, USA" },
              { icon: Target, label: "Shaping education for global innovation" },
              { icon: Shield, label: "Higher Ed Expertise & Quality Assurance" }
            ].map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
                <item.icon className="w-8 h-8 text-[#C9A227] mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-white/70 text-sm">{item.label}</p>
              </div>
            ))}
          </div>


        </div>
      </Section>



      {/* Services Overview */}
      <Section id="services" className="py-24 md:py-32 bg-[#FAF9F7]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-semibold tracking-[0.2em] uppercase">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 tracking-tight">Our Services</h2>
            <div className="flex justify-center mt-6">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#5D1A2D] to-transparent" />
            </div>
          </div>

          {/* Project Based Consulting Services */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#5D1A2D] mb-8 text-center">Project Based Consulting Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                icon={FileText}
                title="Grant Proposal Preparation"
                description="Expert assistance in preparing compelling grant proposals for academic funding."
                delay={0}
              />
              <ServiceCard
                icon={Users}
                title="Faculty Development"
                description="Programs designed to enhance faculty skills and professional growth."
                delay={0.1}
              />
              <ServiceCard
                icon={BookOpen}
                title="Curriculum Development"
                description="Development of comprehensive curricula aligned with international standards."
                delay={0.2}
              />
              <ServiceCard
                icon={Globe}
                title="Exchange Programs"
                description="Preparation for MoU and establishing international exchange partnerships."
                delay={0.3}
              />
            </div>
          </div>

          <GoldDivider />

          {/* Comprehensive Support */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#5D1A2D] mb-8 text-center">Comprehensive Support for Accreditation & Ranking Improvement</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <ServiceCard
                icon={Building2}
                title="Comprehensive Institutional Review"
                description="In-depth analysis and review at the institutional level to identify areas for improvement."
                delay={0}
              />
              <ServiceCard
                icon={Shield}
                title="American Accreditation Support"
                description="Guidance through American Higher Education Accreditation Organizations' requirements and processes."
                delay={0.1}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24 md:py-32 bg-[#FAF9F7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#C9A227] text-sm font-semibold tracking-[0.2em] uppercase">Get Started</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4 tracking-tight">Contact Us</h2>
            <div className="flex justify-center mt-6">
              <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-[#5D1A2D] to-transparent" />
            </div>
            <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto">
              Let's work together to expand educational opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12">
            {/* Application Form Section */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Ready to Apply?</h3>
                <p className="text-gray-600">Submit your application with a one-time application fee</p>
              </div>
              <div className="bg-[#5D1A2D]/5 rounded-xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CreditCard className="w-5 h-5 text-[#5D1A2D]" />
                  <span className="text-[#5D1A2D] font-medium">Application Fee Required</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  A one-time application fee is required before submitting your consultation request.
                </p>
                <a
                  href="https://forms.gle/Ag4Qv19xWb6FYKpJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#5D1A2D] text-white font-medium rounded-xl hover:bg-[#4A1424] transition-all duration-300 shadow-lg shadow-[#5D1A2D]/20"
                >
                  <CreditCard className="w-5 h-5" />
                  Pay & Submit Application
                </a>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <a
                  href="mailto:consulting@eduopp.net"
                  className="group flex items-center gap-6 p-6 rounded-xl border border-gray-100 hover:border-[#C9A227]/30 hover:bg-[#5D1A2D]/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#5D1A2D] flex items-center justify-center group-hover:bg-[#4A1424] transition-colors">
                    <Mail className="w-7 h-7 text-[#C9A227]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="text-[#1A1A1A] font-semibold">consulting@eduopp.net</p>
                  </div>
                </a>
                
                <a
                  href="tel:+17626853011"
                  className="group flex items-center gap-6 p-6 rounded-xl border border-gray-100 hover:border-[#C9A227]/30 hover:bg-[#5D1A2D]/5 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#5D1A2D] flex items-center justify-center group-hover:bg-[#4A1424] transition-colors">
                    <Phone className="w-7 h-7 text-[#C9A227]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <p className="text-[#1A1A1A] font-semibold">(762) 685-3011</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <EagleLogo className="w-10 h-10" />
              <div className="leading-tight">
                <span className="text-[#5D1A2D] font-bold text-lg tracking-tight">EDUOPP</span>
                <span className="text-[#C9A227] font-medium text-xs block tracking-widest">CONSULTING</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} EduOPP Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}