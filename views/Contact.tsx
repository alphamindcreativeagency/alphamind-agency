import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Transmission failed.');
      }
    } catch (err) {
      alert('Transmission error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-[#FF2EB8]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] bg-[#FF2EB8]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative">
        <div className="mb-20">
          <span className="text-[#FF2EB8] text-xs font-medium tracking-[0.22em] mb-5 block">
            Start the Signal
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-black tracking-tighter leading-[0.9]">
            Let’s connect.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-2xl md:text-3xl text-[#D8D8D8] font-light leading-relaxed max-w-xl">
              Bir fikrin mi var? Yeni bir yön mü arıyorsun?
              <br />
              <br />
              Sadece bir cümle bile yeter. Hikâyeyi birlikte yazabiliriz.
            </p>

            <div className="mt-12 space-y-5">
              <a
                href="mailto:onurtombuloglu@alphamind.agency"
                className="flex items-center gap-4 text-[#A8A8A8] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-[#2B2B2B] flex items-center justify-center group-hover:border-[#FF2EB8] transition-colors">
                  <Mail size={17} className="text-[#FF2EB8]" />
                </span>
                <span>onurtombuloglu@alphamind.agency</span>
              </a>

              <a
                href="tel:+905311044288"
                className="flex items-center gap-4 text-[#A8A8A8] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-[#2B2B2B] flex items-center justify-center group-hover:border-[#FF2EB8] transition-colors">
                  <Phone size={17} className="text-[#FF2EB8]" />
                </span>
                <span>+90 531 104 42 88</span>
              </a>

              <a
                href="https://wa.me/905311044288?text=Merhaba%20Alphamind,%20bir%20proje%20hakkında%20görüşmek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-[#A8A8A8] hover:text-white transition-colors group"
              >
                <span className="w-10 h-10 rounded-full border border-[#2B2B2B] flex items-center justify-center group-hover:border-[#FF2EB8] transition-colors">
                  <Phone size={17} className="text-[#FF2EB8]" />
                </span>
                <span>Send Signal via WhatsApp</span>
              </a>

              <div className="flex items-center gap-4 text-[#A8A8A8]">
                <span className="w-10 h-10 rounded-full border border-[#2B2B2B] flex items-center justify-center">
                  <MapPin size={17} className="text-[#FF2EB8]" />
                </span>
                <span>Digital First / Global Hub</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative border border-[#2B2B2B] bg-[#050505]/70 p-8 md:p-12 lg:p-14 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF2EB8]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-black mb-10 tracking-tight text-[#F2F2F2]">
                Tell us what keeps you awake.
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="min-h-[420px] flex flex-col items-center justify-center text-center"
                >
                  <div className="text-[#FF2EB8] mb-6">
                    <Send size={52} className="animate-bounce" />
                  </div>

                  <h4 className="text-3xl font-black mb-3">Signal received.</h4>

                  <p className="text-[#A8A8A8] max-w-md">
                    Analiz ediliyor... Ekibimiz kısa süre içinde sizinle iletişime geçecek.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-[11px] tracking-[0.18em] text-[#A8A8A8]">
                      Identifier / Adınız
                    </label>

                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      className="w-full bg-transparent border-b border-[#2B2B2B] py-4 focus:border-[#FF2EB8] outline-none transition-colors text-lg text-white placeholder:text-[#666]"
                      placeholder="Adınız"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] tracking-[0.18em] text-[#A8A8A8]">
                      Digital Frequency / E-posta
                    </label>

                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      className="w-full bg-transparent border-b border-[#2B2B2B] py-4 focus:border-[#FF2EB8] outline-none transition-colors text-lg text-white placeholder:text-[#666]"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] tracking-[0.18em] text-[#A8A8A8]">
                      The Signal / Mesajınız
                    </label>

                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-transparent border-b border-[#2B2B2B] py-4 focus:border-[#FF2EB8] outline-none transition-colors text-lg text-white placeholder:text-[#666] resize-none"
                      placeholder="Anlatmak istediğiniz hikaye nedir?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-4 py-5 bg-[#FF2EB8] text-black font-black tracking-[0.18em] text-sm hover:shadow-[0_0_24px_rgba(255,46,184,0.45)] hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {loading ? 'TRANSMITTING...' : 'SEND SIGNAL'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;