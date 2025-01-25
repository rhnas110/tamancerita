import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen text-4xl h-dvh text-primary-500 font-poppins">
        Ini adalah halaman home baru test font
      </div>
      <Footer />
    </>
  );
};
