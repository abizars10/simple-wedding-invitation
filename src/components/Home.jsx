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
        <p className="text-xl md:text-3xl font-serif text-stone-700 leading-relaxed">
          We Invited You <br />
          To Celebrate Our Wedding
        </p>
        <img src={logo} alt="logo" />
        <p className="date text-lg md:text-xl font-medium text-amber-800 tracking-wider">Ahad, 27 Desember 2026</p>
      </div>
    </>
  );
}
