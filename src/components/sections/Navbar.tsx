import { useNavigate } from "react-router-dom";
import KalkiPulseLogo from "../ui/KalkiPulseLogo";
import MagneticButton from "../ui/MagneticButton";

export default function Navbar() {
  const nav = useNavigate();
  return (
    <header className="fixed top-4 inset-x-4 z-50 glass flex items-center justify-between px-6 py-2">
      <KalkiPulseLogo />
      <nav className="hidden lg:flex items-center gap-7 text-sm muted">
        {[
          ["Purpose", "purpose"],
          ["Architecture & Goals", "goals"],
          ["Benefits", "benefits"],
        ].map(([l, id]) => (
          <a key={id} href={`#${id}`} className="hover:text-white transition-colors">
            {l}
          </a>
        ))}
        <a
          className="hover:text-white cursor-pointer transition-colors"
          onClick={() => nav("/data-pipeline")}
        >
          Data Cleaning Lab
        </a>
      </nav>
      <div className="flex items-center gap-3.5">
        <a
          className="text-sm cursor-pointer hover:text-white transition-colors"
          onClick={() => nav("/auth")}
        >
          Sign In
        </a>
        <MagneticButton onClick={() => nav("/dashboard")}>
          Launch Estimator →
        </MagneticButton>
      </div>
    </header>
  );
}
