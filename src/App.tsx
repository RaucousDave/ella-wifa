import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

export default function App({}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="bg-background">
      <BrowserRouter>
        {!isLoaded && <Loader onFinish={() => setIsLoaded(true)} />}
        {isLoaded && (
          <>
            <Toaster position="top-center" reverseOrder={false} />
            <Navbar />
            <AnimatedRoutes />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}
