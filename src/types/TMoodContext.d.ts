type TModeContext = {
    currentmode: TCurrentmode,
    changeMode: () => void
};

type TCurrentmode = "light" | "dark"