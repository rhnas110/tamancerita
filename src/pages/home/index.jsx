import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen h-dvh text-4xl">
        Ini adalah halaman home
      </div>
      <Footer />
    </>
  );
};
