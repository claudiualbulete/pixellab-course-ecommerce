import { BsGrid3X3, BsGrid1X2, BsGrid3X2 } from "react-icons/bs";
import { useEffect, useState } from "react";
import { DEFAULT_GRID_STORAGE_KEY, DEFAULT_GRID_COLS } from "../../constants";

const getGridNumberOfCols = () => {
    if (typeof window === 'undefined') {
        return Number(DEFAULT_GRID_COLS);
    }
    
    return Number(window.localStorage.getItem(DEFAULT_GRID_STORAGE_KEY) || DEFAULT_GRID_COLS);
}

export const GridButton = ({ title, isActive, children, onClick }) => {
    return (
        <button title={title}
                className={`border w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center ${isActive ? 'bg-black text-white' : ''}`}
                onClick={onClick}
        >
            {children}
        </button>
    )
};

export const GridControls = ({ setPerRow }) => {
    const [active, setActive] = useState(getGridNumberOfCols());

    useEffect(() => {
        setPerRow(active);

        window.localStorage.setItem(DEFAULT_GRID_STORAGE_KEY, String(active));
    }, [active, setPerRow]);

    return (
        <section className="hidden md:flex justify-center items-center">
            <GridButton title="One per row" isActive={active === 1} onClick={() => setActive(1)}>
                <BsGrid1X2 size="24"/>
            </GridButton>

            <GridButton title="One per row" isActive={active === 2} onClick={() => setActive(2)}>
                <BsGrid3X2 size="24"/>
            </GridButton>

            <GridButton title="One per row" isActive={active === 4} onClick={() => setActive(4)}>
                <BsGrid3X3 size="24"/>
            </GridButton>
        </section>
    )
}
