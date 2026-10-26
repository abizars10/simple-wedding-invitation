import { motion, AnimatePresence } from "framer-motion";
import bgHome from "../assets/bg-home.webp";
import { getGuestName } from "../utils/guestName";
import { MailOpen } from "lucide-react";

export default function CoverModal({ isOpen, onOpen }) {
  const guestName = getGuestName();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100vh" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-stone-900 p-6 text-center text-white"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bgHome})`,
            }}
          />

          {/* Overlay gelap agar teks mudah dibaca */}
          <div className="absolute inset-0 z-0 bg-black/60" />

          {/* Konten undangan */}
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="container relative z-10 max-w-xl space-y-4">
            <div>
              <p className="text-sm uppercase tracking-widest text-amber-200 md:text-2xl">The Wedding Of</p>
              <h1 className="my-2 font-serif text-4xl text-amber-100 md:text-6xl">Abizar &amp; Zahra</h1>
              <p className="text-sm text-stone-200 md:text-lg">Ahad, 27 Oktober 2026</p>
              <p className="my-4 text-xs text-stone-200 md:text-sm">
                Kepada Yth.
                <br />
                Bapak/Ibu/Saudara/i
              </p>
              <h2 className="font-serif text-xl text-amber-100 md:text-2xl">{guestName}</h2>
              <p className="mt-2 text-xs text-stone-200 md:text-sm">Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Menghadiri Acara Pernikahan Kami.</p>
              <button onClick={onOpen} className="mx-auto my-4 flex cursor-pointer items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-amber-500">
                <MailOpen size={18} />
                Buka Undangan
              </button>
              <p className="text-[.65rem] italic text-stone-200 md:text-sm">*Mohon maaf apabila ada kesalahan dalam penulisan nama.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
