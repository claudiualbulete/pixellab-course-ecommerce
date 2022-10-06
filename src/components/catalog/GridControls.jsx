import { BsGrid3X3, BsGrid1X2, BsGrid3X2 } from "react-icons/bs";
import { useEffect, useState } from "react";

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
    const [active, setActive] = useState(4);

    useEffect(() => {
        setPerRow(active);
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
