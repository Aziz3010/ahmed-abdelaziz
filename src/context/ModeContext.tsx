import { createContext, useState } from "react";

export const ModeContext = createContext<TModeContext | null>(null);

export default function ModeContextProvidor({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentmode, setCurrentmode] = useState<TCurrentmode>("light");

  const changeMode = () => {
    console.log("========= Run ==========");
    
    const HTMLROOT = window.document.getElementById("root");
    const CURRENTCLASSNAME = HTMLROOT?.className;

    if (CURRENTCLASSNAME === "light") {
      HTMLROOT?.classList.remove("light");
      HTMLROOT?.classList.add("dark");
      setCurrentmode("dark");
    } else {
      HTMLROOT?.classList.remove("dark");
      HTMLROOT?.classList.add("light");
      setCurrentmode("light");
    }
  };

  return (
    <ModeContext.Provider
      value={{ currentmode, changeMode }}
    >
      {children}
    </ModeContext.Provider>
  );
}
