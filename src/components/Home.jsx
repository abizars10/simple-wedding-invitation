import logo from "../assets/logo.webp";
import bgHero from "../assets/bg-hero.webp";

export default function Home() {
  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-black/60" />
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center p-6 bg-amber-50/40">
        <p className="text-xl text-shadow-lg md:text-3xl font-serif text-stone-700 leading-relaxed">
          We Invited You <br />
          To Celebrate Our Wedding
        </p>
        <img src={logo} alt="logo" />
        <p className=" text-lg md:text-xl text-shadow-lg font-medium text-stone-700 tracking-wider">AHAD, 27 DESEMBER 2026</p>
      </div>
    </>
  );
}
