import { GoogleTagManager } from "@next/third-parties/google";
// import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "👨‍💻📈 Shreyak's - Portfolio 🎯✨ ",
  description:
    "My name is Shreyak Mukherje. I’m a passionate Machine Learning and Deep Learning enthusiast with a solid foundation in computer science, specializing in building intelligent systems that bridge the gap between data and real-world impact—particularly in areas like computer vision, natural language processing, and predictive analytics. With hands-on experience in Python, TensorFlow, PyTorch, and Scikit-learn, I develop, train, and deploy robust ML models from scratch, covering the full development cycle—from data preprocessing and hyperparameter tuning to deploying scalable solutions using Streamlit, Flask, and Docker. Curious by nature and driven by innovation, I’m always eager to take on challenging problems and collaborate on projects that push the boundaries of AI, whether in research, development, or real-time applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* className={inter.className} -> inside <body> */}
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
