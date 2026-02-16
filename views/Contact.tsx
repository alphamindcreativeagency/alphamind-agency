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
    }

    setLoading(false);
  };

  return (
    <div className="space-y-24">
      <section>
        <span className="text-[#FF2EB8] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
          START THE SIGNAL
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
          LET'S CONNECT.
        </h1>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-8">
            <p className="text-2xl text-[#D8D8D8] font-light leading-relaxed">
              Bir fikrin mi var? Yeni bir yön mü arıyorsun? Sadece bir cümle bile yeter.
              Hikâyeyi birlikte yazabiliriz.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-[#A8A8A8] group">
                <Mail size={18} className="text-[#FF2EB8]" />
                <a
                  href="mailto:onurtombuloglu@alphamind.agency"
                  className="group-hover:text-white transition-colors"
                >
                  onurtombuloglu@alphamind.agency
                </a>
              </div>

              <div className="flex items-center space-x-4 text-[#A8A8A8] group">
                <Phone size={18} className="text-[#FF2EB8]" />
                <a
                  href="tel:+905311044288"
                  className="group-hover:text-white transition-colors"
                >
                  +90 531 104 42 88
                </a>
              </div>

              <div className="flex items-center space-x-4 text-[#A8A8A8] group">
                <Phone size={18} className="text-[#FF2EB8]" />
                <a
                  href="https://wa.me/905311044288?text=Merhaba%20Alphamind,%20bir%20proje%20hakkında%20görüşmek%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group-hover:text-white transition-colors"
                >
                  Send Signal via WhatsApp
                </a>
              </div>

              <div className="flex items-center space-x-4 text-[#A8A8A8] group">
                <MapPin size={18} className="text-[#FF2EB8]" />
                <span className="group-hover:text-white transition-colors">
                  Digital First / Global Hub
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 border border-[#2B2B2B] bg-[#0A0A0A] rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Send size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="text-[#FF2EB8] font-bold uppercase text-xs mb-2">
                OFFICE HOURS
              </h3>
              <p className="text-[#A8A8A8] text-sm">
                Our labs are active 24/7 in the digital space. Response time: &lt; 4h.
              </p>
            </div>
          </div>
        </div>

        <div className="p-12 border border-[#2B2B2B] relative">
          <h3 className="text-xl font-bold uppercase mb-8 tracking-widest text-[#F2F2F2]">
            TELL US WHAT KEEPS YOU AWAKE.
          </h3>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center py-20"
            >
              <div className="text-[#FF2EB8] mb-4">
                <Send size={48} className="animate-bounce" />
              </div>
              <h4 className="text-2xl font-bold mb-2">SIGNAL RECEIVED.</h4>
              <p className="text-[#A8A8A8]">
                Analiz ediliyor... Ekibimiz kısa süre içinde sizinle iletişime geçecek.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A8A8A8]">
                  IDENTIFIER / Adınız
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-transparent border-b border-[#2B2B2B] py-3 focus:border-[#FF2EB8] outline-none transition-colors text-lg"
                  placeholder="Onur ..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A8A8A8]">
                  DIGITAL FREQUENCY / E-posta
                </label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full bg-transparent border-b border-[#2B2B2B] py-3 focus:border-[#FF2EB8] outline-none transition-colors text-lg"
                  placeholder="name@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A8A8A8]">
                  THE SIGNAL / Mesajınız
                </label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-[#2B2B2B] py-3 focus:border-[#FF2EB8] outline-none transition-colors text-lg resize-none"
                  placeholder="Anlatmak istediğiniz hikaye nedir?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-[#FF2EB8] text-black font-bold uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_15px_#FF2EB8] transition-all disabled:opacity-50"
              >
                {loading ? 'TRANSMITTING...' : 'SEND SIGNAL'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
