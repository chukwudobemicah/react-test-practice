import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showText, setShowText] = useState(false);
  const toggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>HOME PAGE</h1>
      <label htmlFor="input-text">Label text</label>
      <input id="input-text" />
      <input placeholder="search"></input>
      <input value="seven"></input>
      {showText && <div>Show text</div>}
      <button onClick={() => setTimeout(toggleText, 100)}>click me</button>
    </main>
  );
}
