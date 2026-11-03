import logo from "../assets/logo.webp";
import bgHero from "../assets/bg-hero.webp";

export default function Home() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      />

      <div className="absolute inset-0 -z-10 bg-black/40" />

      <div className="relative flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center">
        <p className="font-serif text-xl leading-relaxed text-white text-shadow-lg sm:text-2xl md:text-3xl">
          We Invited You
          <br />
          To Celebrate Our Wedding
        </p>

        <img src={logo} alt="Wedding Logo" className="my-6 h-auto w-lg object-contain sm:w-36 md:w-lg" />

        <p className="text-base font-medium tracking-wider text-white text-shadow-lg sm:text-lg md:text-xl">AHAD, 27 DESEMBER 2026</p>
      </div>
    </section>
  );
}
