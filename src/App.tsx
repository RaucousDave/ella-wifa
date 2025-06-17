import { useState } from "react";
import Loader from "./components/Loader";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-background">
      <BrowserRouter>
        {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}
        {isLoaded && (
          <>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}
