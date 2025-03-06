import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { CardProfile } from "../../components/card-profile";
import image1 from "../../assets/about/1.png";
import image2 from "../../assets/about/2.png";
import image3 from "../../assets/about/3.png";
import image4 from "../../assets/about/4.png";
import image5 from "../../assets/about/5.png";
import image6 from "../../assets/about/6.png";

export const Aboutpage = () => {
  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto mb-8">
        <h2 className="mb-4 text-3xl font-semibold text-center font-poppins">
          Tentang Kami
        </h2>
        <p>
          Taman Cerita adalah sebuah platform yang didedikasikan untuk
          menyimpan, membagikan, dan menikmati berbagai cerita pendek dari
          Indonesia maupun dunia. Fokus utama kami adalah menyajikan
          cerita-cerita yang dapat menginspirasi dan mengedukasi anak-anak,
          dengan cara yang menyenangkan dan mudah dipahami.
          <br />
          <br />
          Kami percaya bahwa cerita adalah bagian penting dalam perkembangan
          imajinasi dan pemahaman dunia anak-anak. Melalui Taman Cerita, kami
          berusaha untuk memperkenalkan anak-anak pada kekayaan budaya dan
          tradisi yang ada di berbagai belahan dunia, sembari menyajikan cerita
          yang mengandung nilai moral yang dapat membimbing mereka dalam
          kehidupan sehari-hari.
          <br />
          <br />
          Taman Cerita dimulai sebagai ide sederhana dari dua orang yang berawal
          dari perbincangan ringan dan keinginan untuk berbagi cerita yang
          menginspirasi anak-anak. Proyek ini merupakan hasil kolaborasi
          sekelompok mahasiswa yang sedang belajar dan berusaha mengembangkan
          sebuah platform untuk membawa cerita-cerita menarik dari berbagai
          penjuru dunia, khususnya yang ditujukan untuk anak-anak.
        </p>
      </section>
      <section className="max-w-4xl mx-auto mb-8">
        <h2 className="mb-8 text-3xl font-semibold text-center font-poppins">
          Behind The Scenes
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <CardProfile
            name="Le Minerale"
            image={image1}
            role="Tukang Nyender"
          />
          <CardProfile name="Le viathan" image={image2} role="Tukang Tidur" />
          <CardProfile name="Siuuu" image={image3} role="Developer" />
          <CardProfile name="Capt Le" image={image4} role="Tukang Design" />
          <CardProfile
            name="Tukang Haha Hihi"
            image={image5}
            role="Tukang Ketawa"
          />
          <CardProfile name="Si Nyi Mak" image={image6} role="Diem aja" />
        </div>
      </section>
      <Footer />
    </>
  );
};
