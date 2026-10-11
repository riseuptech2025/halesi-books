import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// LAUNCH DATE — 15 DAYS FROM NOW
// ==========================================
const LAUNCH_DATE = (() => {
  const launch = new Date();
  launch.setDate(launch.getDate() + 15);
  return launch.toISOString();
})();

// ==========================================
// WHATSAPP CONTACT
// Use full international format WITHOUT "+" or spaces
// Example: Nepal number 98XXXXXXXX → 97798XXXXXXXX
// ==========================================
const WHATSAPP_NUMBER = "9779863958892"; // 
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Halesi Books & Stationary! I'd like to know more about your upcoming launch."
);
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

function App() {
  const calculateTimeLeft = () => {
    const difference =
      new Date(LAUNCH_DATE).getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
    }),
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[var(--text)] flex flex-col">

      {/* ========================================
          ANIMATED MIXED BACKGROUND (Red + Green + Yellow)
      ======================================== */}
      <div className="absolute inset-0 -z-10 bg-[var(--background)]" />

      {/* Yellow blob (top-left) */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[160px]"
        style={{ backgroundColor: "rgba(255, 192, 0, 0.35)" }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Red blob (bottom-right) */}
      <motion.div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-[160px]"
        style={{ backgroundColor: "rgba(192, 0, 0, 0.28)" }}
        animate={{ x: [0, -15, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Green blob (center) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[170px]"
        style={{ backgroundColor: "rgba(0, 103, 102, 0.22)" }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ========================================
          NAVBAR
      ======================================== */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white border border-[var(--primary)]/10 shadow-md flex items-center justify-center"
            >
              <img
                src="/logo.jpeg"
                alt="Halesi Books & Stationary"
                className="w-full h-full object-contain p-1"
              />
            </motion.div>
            <div>
              <h1 className="font-bold text-lg sm:text-xl tracking-wide text-[var(--primary)]">
                HALESI BOOKS
              </h1>
              <p className="text-[var(--secondary)] text-[10px] sm:text-xs tracking-[3px] font-medium">
                & STATIONARY
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 border border-[var(--secondary)]/30 bg-white/60 backdrop-blur-sm text-[var(--secondary)] px-5 py-2 rounded-full text-sm shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--secondary)]" />
            </span>
            Launching Soon
          </div>
        </div>
      </motion.header>

      {/* ========================================
          MAIN SECTION
      ======================================== */}
      <main className="relative z-10 flex-1 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto px-5 py-8 sm:py-10 text-center">

          {/* Big Logo */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="flex justify-center mb-5"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(255, 192, 0, 0.45)" }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 220 }}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-[var(--primary)]/10 shadow-xl flex items-center justify-center overflow-hidden"
              >
                <img
                  src="/logo.jpeg"
                  alt="Halesi Books & Stationary"
                  className="w-full h-full object-contain p-2"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Small Heading */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center items-center gap-2 text-[var(--secondary)] mb-4"
          >
            <Sparkles size={17} />
            <p className="text-xs sm:text-sm font-semibold tracking-[2px] sm:tracking-[4px]">
              A NEW CHAPTER IS ABOUT TO BEGIN
            </p>
            <Sparkles size={17} className="hidden sm:block" />
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[var(--primary)]"
          >
            Something Amazing
            <br />
            Is{" "}
            <motion.span
              className="inline-block text-[var(--secondary)]"
              animate={{
                textShadow: [
                  "0 0 0px rgba(192,0,0,0)",
                  "0 0 18px rgba(255,192,0,0.7)",
                  "0 0 0px rgba(192,0,0,0)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              Coming Soon.
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto mt-4 text-[var(--primary)]/70 text-sm sm:text-base leading-6 sm:leading-7"
          >
            Your next favorite book is just a click away. We're building a
            better way to discover, explore, and shop for books, stationery,
            educational materials and much more.
          </motion.p>

          {/* ========================================
              COUNTDOWN
          ======================================== */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto mt-8 sm:mt-10">
            {countdownItems.map((item, i) => (
              <motion.div
                key={item.label}
                custom={4 + i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white/70
                  backdrop-blur-md
                  border
                  border-[var(--primary)]/10
                  rounded-xl
                  sm:rounded-2xl
                  px-2
                  py-3
                  sm:py-5
                  shadow-sm
                  hover:border-[var(--accent)]
                  hover:shadow-lg
                  transition-colors
                "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/0 via-[var(--accent)]/0 to-[var(--secondary)]/0 group-hover:from-[var(--accent)]/10 group-hover:to-[var(--secondary)]/10 transition-all duration-500" />

                <h3 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--primary)]">
                  {String(item.value).padStart(2, "0")}
                </h3>

                <p className="relative text-[var(--secondary)] text-[8px] sm:text-xs font-semibold tracking-[1px] sm:tracking-[3px] mt-1 sm:mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          

          {/* ========================================
              CONTACT BUTTON — WhatsApp (GREEN)
          ======================================== */}
          <motion.div
            custom={9}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex justify-center mt-5"
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="
                group
                flex
                items-center
                gap-3
                bg-[#25D366]
                hover:bg-[#1ebe5b]
                text-white
                font-semibold
                px-6
                py-3
                rounded-full
                shadow-lg
                shadow-[#25D366]/30
                hover:shadow-[#25D366]/50
                transition-colors
              "
            >
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[18px] h-[18px]"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.48-8.41ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.83 9.83 0 0 1-1.51-5.25c0-5.46 4.45-9.9 9.92-9.9 2.65 0 5.14 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 7.01c-.01 5.46-4.46 9.84-9.97 9.84Zm5.44-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.68-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.1 4.51.71.31 1.27.49 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
              </svg>

              Contact on WhatsApp
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.a>
          </motion.div>

        </div>
      </main>

     
    </div>
  );
}

export default App;