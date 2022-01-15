import React, { useEffect, useRef } from "react";

import "./App.css";
import { gsap } from "gsap/all";
function App() {
  const name = useRef(null);
  useEffect(() => {
    gsap.from([name.current], 1, {
      delay: 0,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [name]);
  return (
    <div className="app-container">
      <div className="name-container">
        <p ref={name} id="name">
          Arpan Desai
        </p>
      </div>
    </div>
  );
}

export default App;
