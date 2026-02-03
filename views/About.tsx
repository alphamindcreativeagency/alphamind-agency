
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="space-y-32">
      <section className="max-w-4xl">
        <span className="text-[#FF2EB8] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">THE STORY BEHIND THE SIGNAL</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Alphamind, klasik ajans anlayışının ötesinde yeni bir yaratıcı düzeni temsil eder.</h1>
        <p className="text-xl md:text-2xl text-[#D8D8D8] font-light leading-relaxed">
          Biz, markaların hikâyesini yalnızca anlatmak için değil—onların geleceğini şekillendirmek için oyuna giriyoruz.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold uppercase text-[#FF2EB8]">ORIGIN STORY</h2>
            <p className="text-[#D8D8D8] leading-relaxed">
              Her marka bir karmaşayla başlar. Trendler değişir, kitleler dağılır, mesajlar gürültüde kaybolur. 
              Alphamind bu kaosun ortasında, neon pembe bir imza gibi doğdu. Misyonumuz netti: 
              Markaların karanlıkta kaldığı her yerde, yolu aydınlatan stratejik bir ışık olmak.
            </p>
          </div>
          <div className="p-12 bg-[#0A0A0A] border border-[#2B2B2B]">
            <h2 className="text-2xl font-bold uppercase text-[#F2F2F2] mb-6">FOUNDER NOTE <span className="text-[#A8A8A8] text-sm font-normal">(Onur)</span></h2>
            <p className="italic text-[#D8D8D8] font-light leading-relaxed mb-8">
              “Alphamind benim için yalnızca bir ajans değil; sezgisel yaratıcılığın, stratejik disiplinin ve yapay zekâ gücünün birleştiği bir laboratuvar. 
              Biz, markaların yalnızca görünmesini değil, unutulmaz olmasını sağlıyoruz.”
            </p>
            <div className="h-[1px] w-12 bg-[#FF2EB8]" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {[
            { title: "Yaratıcılık", detail: "Duygu + disiplin + estetik keskinliği" },
            { title: "Strateji", detail: "Karmaşayı okunabilir hale getiren netlik" },
            { title: "AI", detail: "Üretimi hızlandıran, sınırları kaldıran güç" },
            { title: "Tasarım", detail: "Sadelik + yüksek etki + neon atmosfer" }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 border border-[#2B2B2B] hover:border-[#FF2EB8]/40 transition-all">
              <div className="text-[#FF2EB8] text-xs font-bold mb-2 uppercase tracking-widest">{item.title}</div>
              <div className="text-2xl font-bold group-hover:translate-x-2 transition-transform">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
