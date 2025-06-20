import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slideVariants = {
  initial: { y: 0 },
  exit: {
    y: "-100%",
    transition: {
      duration: 1,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};
type LoaderProps = {
  onFinish: () => void;
};
export default function Loader({ onFinish }: LoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay or wait for actual window load
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
        onFinish(); // tell parent to show the app
      }, 2000); // wait 2s or until actual assets are ready
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-background z-[9999] flex items-center justify-center"
          variants={slideVariants}
          initial="initial"
          exit="exit"
        >
          {/* You can add a logo, spinner, or animation here */}
          <h1 className="text-primary-light text-4xl font-heading tracking-tight">
            Immanuella Wifa
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
