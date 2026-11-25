import {useNavigate} from "react-router-dom";import {useState} from "react";import MagneticButton from "../ui/MagneticButton";
export default function FinaleCtaFooter(){const nav=useNavigate();const [tip,setTip]=useState(false);
 return <><section className="px-6 md:px-16 py-20"><div className="glass p-12 md:p-20 text-center relative">
  <h2 className="text-5xl font-extrabold max-w-3xl mx-auto">Ready to Predict Your Next Winning Campaign?</h2>
  <div className="flex gap-4 justify-center mt-10 relative"><MagneticButton onClick={()=>nav("/auth")}>Sign In / Create Brand Account</MagneticButton>
   <span onMouseEnter={()=>setTip(true)} onMouseLeave={()=>setTip(false)} onFocus={()=>setTip(true)} onBlur={()=>setTip(false)}><MagneticButton primary={false}>View Live Demo Credentials</MagneticButton></span>
   {tip&&<div className="absolute top-full mt-3 glass px-4 py-2 num text-xs">Faculty demo: set in backend seed script</div>}</div></div></section>
  <footer className="px-6 md:px-16 py-10 text-xs muted flex flex-wrap justify-between gap-4 border-t border-white/5"><span>Influencer Impact & ROI Estimator</span><span className="num">FastAPI • XGBoost • ONNX • Kafka • Redis • React</span></footer></>}
