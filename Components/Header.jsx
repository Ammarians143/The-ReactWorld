import React, { useState } from "react";

export default function Header() {
  const [isDark , setIsDark] = useState(false)
   return (
    <>
      <header className="header">
        <div className="header-content">
          <h2 className="title">
            <a href="#">Where in the World?</a>
          </h2>
          <p
            className="theme-changer"
            onClick={() => {
              document.body.classList.toggle("light");
              setIsDark(!isDark)
            }}
          >
            <i className={`fa-solid fa-${isDark? 'moon' : 'sun'}`}></i>&nbsp;{isDark? 'dark' : 'light'} Mode
          </p>
        </div>
      </header>
    </>
  );
}
