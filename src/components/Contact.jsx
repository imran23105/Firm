import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  Check,
  Upload,
  ArrowRight,
  Send,
  Building
} from 'lucide-react';
import Reveal from './Reveal';
import {
  contactLocations,
  practiceAreaDropdownOptions
} from '../data/firmData';

export default function Contact() {
  const [activeLocationId, setActiveLocationId] = useState('india');

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    phone: '',
    country: '',
    practiceArea: '',
    matterDescription: '',
    contactMethod: 'Email',
    uploadedFileName: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const activeLocation =
    contactLocations.find((loc) => loc.id === activeLocationId) ||
    contactLocations[0];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        uploadedFileName: e.target.files[0].name,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Contact number is required';
    if (!formData.practiceArea) newErrors.practiceArea = 'Please choose a practice area';
    if (!formData.matterDescription.trim()) {
      newErrors.matterDescription = 'Please provide a brief outline of the matter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setShakeKey((prev) => prev + 1);
      return;
    }

    setIsSubmitting(true);
    // Client-side demo submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      organisation: '',
      email: '',
      phone: '',
      country: '',
      practiceArea: '',
      matterDescription: '',
      contactMethod: 'Email',
      uploadedFileName: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-ivory text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1.5px] bg-gold" />
              <span className="text-xs font-sans font-semibold tracking-super-wide uppercase text-burgundy">
                CONTACT KSHETRY &amp; CO.
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-burgundy leading-[1.12] mb-4">
              Let&apos;s Discuss Your Matter.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-charcoal/80 text-base md:text-lg font-light leading-relaxed">
              We welcome preliminary inquiries from corporations, general counsel, investors and private clients seeking strategic counsel.
            </p>
          </Reveal>
        </div>

        {/* Location Switcher Tabs (Sliding tab underline) */}
        <div className="border-b border-gold/30 mb-12">
          <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
            {contactLocations.map((loc) => {
              const isActive = activeLocationId === loc.id;
              return (
                <button
                  key={loc.id}
                  onClick={() => setActiveLocationId(loc.id)}
                  className={`relative py-3 text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-burgundy' : 'text-charcoal/60 hover:text-burgundy'
                  }`}
                >
                  <span>{loc.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="contactTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cross-fade Location Details Ribbon */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-[#F4EFE6] border border-gold/40 p-6 sm:p-8 mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs font-sans"
          >
            <div className="md:col-span-5 space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-gold">
                REGIONAL CHAMBERS
              </span>
              <h3 className="font-serif text-2xl text-burgundy font-medium">
                {activeLocation.headline}
              </h3>
              <p className="font-light text-charcoal/80 leading-relaxed">
                {activeLocation.address}
              </p>
              <div className="text-[11px] text-burgundy font-mono pt-1">
                {activeLocation.phone}
              </div>
            </div>

            <div className="md:col-span-4 space-y-2.5">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal/60">
                DIRECT JURISDICTIONAL DESKS
              </span>
              <div className="flex items-center gap-2 text-charcoal/80">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>General: <strong className="font-medium text-charcoal">{activeLocation.generalEmail}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/80">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>Counsel: <strong className="font-medium text-charcoal">{activeLocation.legalEmail}</strong></span>
              </div>
              <div className="flex items-center gap-2 text-charcoal/80">
                <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>HR &amp; Pupillage: <strong className="font-medium text-charcoal">{activeLocation.hrEmail}</strong></span>
              </div>
            </div>

            <div className="md:col-span-3 space-y-2 border-t md:border-t-0 md:border-l border-gold/25 pt-4 md:pt-0 md:pl-6">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal/60">
                OFFICE HOURS
              </span>
              <div className="flex items-start gap-2 text-charcoal/80 font-light">
                <Clock className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                <span>{activeLocation.hours}</span>
              </div>
              <p className="text-[10px] text-charcoal/60 italic pt-2">
                Scope: {activeLocation.jurisdictionScope}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Two-Column Premium Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: START A CONVERSATION Editorial Manifesto */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <h3 className="font-serif text-3xl sm:text-4xl text-burgundy font-medium leading-snug">
                START A CONVERSATION
              </h3>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="font-sans text-charcoal/80 text-sm md:text-base font-light leading-relaxed">
                Whether structuring an international joint venture, evaluating commercial dispute options, or entering new regional markets, early consultation allows us to design proactive, commercially grounded legal solutions.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-gold/30 bg-white/60 p-6 space-y-4">
                <h4 className="text-xs font-sans font-bold uppercase tracking-wider text-burgundy">
                  Engagement Protocol
                </h4>
                <ul className="space-y-2.5 text-xs font-sans text-charcoal/80 font-light">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>Inquiries evaluated directly by jurisdictional practice heads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>Strict conflict check performed prior to formal engagement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>Initial response usually provided within 24 business hours.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Mandatory Legal Disclaimer */}
              <div className="bg-champagne/20 border-l-2 border-burgundy p-4 text-[11px] font-sans text-charcoal/70 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold text-burgundy uppercase text-[10px] mb-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-burgundy" />
                  <span>Important Legal Notice</span>
                </div>
                Submission of an enquiry does not create a lawyer-client relationship. Confidential or privileged information should not be submitted until such relationship has been formally established.
              </div>
            </Reveal>
          </div>

          {/* Right Column: Premium Form with Validation and Shake Animation */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gold/40 p-8 sm:p-10 shadow-elevated relative">
              
              {isSubmitted ? (
                /* Success State with Animated SVG Checkmark */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-12 text-center"
                >
                  {/* Animated SVG Checkmark */}
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="#C8A15A"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.path
                        d="M 32 52 L 44 64 L 68 38"
                        stroke="#6F1028"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                      />
                    </svg>
                  </div>

                  <h3 className="font-serif text-3xl text-burgundy font-medium mb-3">
                    Enquiry Registered Successfully
                  </h3>
                  <p className="font-sans text-sm text-charcoal/80 max-w-md mx-auto mb-6 font-light leading-relaxed">
                    Thank you, <strong className="font-medium text-charcoal">{formData.fullName}</strong>. Your confidential matter outline has been routed to our Senior Practice Board for conflict check and preliminary assessment.
                  </p>

                  <div className="bg-ivory border border-gold/30 p-4 max-w-sm mx-auto text-left text-xs font-sans mb-8">
                    <div className="text-[10px] uppercase font-bold text-gold tracking-wider mb-1">
                      Enquiry Reference Token
                    </div>
                    <div className="font-mono text-burgundy font-semibold">
                      KC-DEMO-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    <div className="text-charcoal/60 mt-1">
                      Preferred Mode: {formData.contactMethod}
                    </div>
                  </div>

                  <button
                    onClick={resetForm}
                    className="bg-burgundy text-white font-sans text-xs uppercase font-semibold px-6 py-3 tracking-widest hover:bg-burgundyDark transition-colors"
                  >
                    SUBMIT ANOTHER ENQUIRY
                  </button>
                </motion.div>
              ) : (
                /* Interactive Form with Shake Key on validation error */
                <motion.form
                  key={shakeKey}
                  onSubmit={handleSubmit}
                  animate={shakeKey > 0 ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  noValidate
                  className="space-y-6"
                >
                  <div className="text-left mb-6 pb-2 border-b border-gold/20 flex justify-between items-baseline">
                    <span className="font-serif text-xl text-burgundy font-medium">
                      Confidential Client Enquiry Form
                    </span>
                    <span className="text-[10px] font-sans text-charcoal/50 uppercase">
                      * Required Fields
                    </span>
                  </div>

                  {/* Row 1: Full Name & Organisation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Lord / Dr. / Mr. / Ms. Name"
                        className={`w-full bg-[#FAF7F2] border px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white transition-colors ${
                          errors.fullName ? 'border-red-600' : 'border-gold/30 focus:border-burgundy'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[10px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div className="relative group">
                      <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        Organisation / Enterprise
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleInputChange}
                        placeholder="e.g., Holdings Ltd / Individual"
                        className="w-full bg-[#FAF7F2] border border-gold/30 px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white focus:border-burgundy transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="relative group">
                      <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="client@enterprise.com"
                        className={`w-full bg-[#FAF7F2] border px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white transition-colors ${
                          errors.email ? 'border-red-600' : 'border-gold/30 focus:border-burgundy'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-600 mt-0.5 block">{errors.email}</span>
                      )}
                    </div>

                    <div className="relative group">
                      <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 / +971 / +44 / +1 ..."
                        className={`w-full bg-[#FAF7F2] border px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white transition-colors ${
                          errors.phone ? 'border-red-600' : 'border-gold/30 focus:border-burgundy'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-600 mt-0.5 block">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Country/Jurisdiction & Practice Area Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        Country / Primary Jurisdiction
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="e.g., India, UAE, UK, USA, Thailand, etc."
                        className="w-full bg-[#FAF7F2] border border-gold/30 px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white focus:border-burgundy transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                        Practice Area *
                      </label>
                      <select
                        name="practiceArea"
                        value={formData.practiceArea}
                        onChange={handleInputChange}
                        className={`w-full bg-[#FAF7F2] border px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white transition-colors ${
                          errors.practiceArea ? 'border-red-600' : 'border-gold/30 focus:border-burgundy'
                        }`}
                      >
                        <option value="">Select Relevant Practice Area</option>
                        {practiceAreaDropdownOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.practiceArea && (
                        <span className="text-[10px] text-red-600 mt-0.5 block">{errors.practiceArea}</span>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Brief Description of Matter */}
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      Brief Description of Matter *
                    </label>
                    <textarea
                      rows="4"
                      name="matterDescription"
                      value={formData.matterDescription}
                      onChange={handleInputChange}
                      placeholder="Please outline the principal commercial context, parties involved, jurisdictions, and objective (without disclosing unprivileged non-public trade secrets)."
                      className={`w-full bg-[#FAF7F2] border px-3 py-2.5 text-xs font-sans text-charcoal focus:outline-none focus:bg-white transition-colors resize-none ${
                        errors.matterDescription ? 'border-red-600' : 'border-gold/30 focus:border-burgundy'
                      }`}
                    />
                    {errors.matterDescription && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{errors.matterDescription}</span>
                    )}
                  </div>

                  {/* Row 5: Preferred Contact Method */}
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap items-center gap-6 text-xs font-sans">
                      {['Email', 'Phone', 'Meeting'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={handleInputChange}
                            className="accent-burgundy"
                          />
                          <span className="text-charcoal/80">{method} Consultation</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Row 6: Optional Upload Document */}
                  <div>
                    <label className="block text-[11px] font-sans font-semibold uppercase tracking-wider text-charcoal/70 mb-1">
                      Optional Document Upload (NDA / Brief / Registry Extract)
                    </label>
                    <div className="relative border border-dashed border-gold/50 bg-[#FAF7F2] p-4 text-center hover:bg-champagne/10 transition-colors">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="flex items-center justify-center gap-2 text-xs font-sans text-charcoal/70">
                        <Upload className="w-4 h-4 text-gold" />
                        <span>
                          {formData.uploadedFileName ? (
                            <strong className="text-burgundy">{formData.uploadedFileName}</strong>
                          ) : (
                            'Click or drag PDF / DOCX file here (Max 15MB)'
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden bg-burgundy hover:bg-burgundyDark text-white text-xs uppercase font-sans font-semibold tracking-widest py-4 border border-burgundy transition-all duration-300 shadow-sm"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <span>TRANSMITTING ENQUIRY...</span>
                        ) : (
                          <>
                            <span>SUBMIT ENQUIRY</span>
                            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1.5 transition-transform" />
                          </>
                        )}
                      </span>
                      <span className="absolute inset-0 bg-burgundyDark translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0" />
                    </button>
                  </div>
                </motion.form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
