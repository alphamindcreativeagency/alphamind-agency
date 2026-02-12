
import React from "react";

const About: React.FC = () => {
  return (
    <div className="space-y-32">

      {/* HERO */}
      <section className="max-w-5xl space-y-8">
        <span className="text-sm tracking-[0.4em] uppercase font-bold text-[#A8A8A8]">
          HAKKIMIZDA
        </span>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#F2F2F2]">
          THE STORY BEHIND THE ACTION
        </h2>

        <p className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Alphamind, klasik ajans anlayışının ötesinde yeni bir yaratıcı düzeni temsil eder.
        </p>

        <p className="text-xl text-[#D8D8D8] leading-relaxed">
          Yalnızca markanızın hikayesini anlatmak için değil—geleceğini şekillendirmek için oyuna giriyoruz.
        </p>
      </section>


      {/* ORIGIN STORY + FOUNDER MESSAGE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* SOL TARAF — ORIGIN STORY */}
        <div className="space-y-8">

          <h3 className="text-2xl font-bold uppercase text-[#FF2EB8]">
            ORIGIN STORY
          </h3>

          <div className="space-y-6 text-[#D8D8D8] leading-relaxed">

            <p>
              Alphamind, yıllarını yazmaya, tasarlamaya ve markaların büyüme
              hikâyelerine eşlik etmeye adamış yaratıcı zihinlerin, daha iyisini
              üretme huzursuzluğuyla bir araya gelmesiyle doğdu. Bir ajans değil;
              birlikte düşünen, hızla üreten ve sürekli gelişen bir hub olma
              niyetiyle yola çıktı.
            </p>

            <p>
              Peki neden?
            </p>

            <p>
              Çünkü kalabalıklaşan bu dünyada fark yaratan şey daha fazla
              konuşmak değil, daha doğru olanı söylemektir.
            </p>

            <p>
              Bir markanın özünü gerçekten anlamak, beklentiyi doğru yönetmek
              ve doğru hedefi koyarak en kısa yoldan net faydaya ulaşmak.
              Alphamind, sizi uzayan brief zincirlerinden, bitmeyen
              toplantılardan ve sonuç vermeyen denemelerden kurtarmak için
              kuruldu.
            </p>

            <p>
              Her şeyin içeriğe dönüştüğü ve saniyeler içinde tüketildiği bir
              çağda, sınırlı zaman ve akıllı kaynak kullanımıyla maksimum etki
              yaratmak bizim refleksimiz.
            </p>

            <p>
              Yaratıcılıktan aldığımız ilhamı, güncel trendleri ve yapay zekânın
              hızını tek potada eritiyor; hikâyenizi en doğru biçimde, en geniş
              kitlelere ulaştıracak fikirler üretmeye devam ediyoruz.
            </p>

          </div>
        </div>


        {/* SAĞ TARAF — FOUNDER MESSAGE */}
        <div className="p-10 bg-[#0A0A0A] border border-[#2B2B2B] space-y-6 max-w-lg self-start">

  <h3 className="text-2xl font-bold uppercase text-white">
    FOUNDER’S MESSAGE
  </h3>

  <div className="h-[2px] w-10 bg-[#FF2EB8]" />

  <p className="italic text-[#D8D8D8] font-light leading-relaxed">
    “Alphamind benim için yalnızca bir ajans değil; sezgisel
    yaratıcılığın, stratejik disiplinin ve yapay zekâ gücünün birleştiği
    bir laboratuvar. Biz, markaların yalnızca görünmesini değil,
    unutulmaz olmasını sağlıyoruz.”
  </p>

  <div className="text-[#A8A8A8] text-sm">
    — Onur Tombuloğlu
  </div>

</div>

      </section>
    </div>
  );
};

export default About;