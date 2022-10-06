import { BsFillGridFill, BsFillGrid3X3GapFill, BsGrid3X3, BsGrid1X2, BsGrid3X2 } from "react-icons/bs";
import { useEffect, useState } from "react";

export const GridControls = ({ setPerRow }) => {
    const [active, setActive] = useState(4);

    useEffect(() => {
        setPerRow(active);
    }, [active, setPerRow]);

    return (
        <section className="flex justify-center items-center">
            <button title="One per row"
                    className={`border w-20 h-20 flex items-center justify-center ${active === 1 ? 'bg-black text-white' : ''}`}
                    onClick={() => setActive(1)}
            >
                <BsGrid1X2 size="24"/>
            </button>

            <button title="Two per row"
                    className={`border w-20 h-20 hidden md:flex items-center justify-center ${active === 2 ? 'bg-black text-white' : ''}`}
                    onClick={() => setActive(2)}
            >
                <BsGrid3X2 size="24"/>
            </button>

            <button title="Four per row"
                    className={`border w-20 h-20 hidden lg:flex items-center justify-center ${active === 4 ? 'bg-black text-white' : ''}`}
                    onClick={() => setActive(4)}
            >
                <BsGrid3X3 size="24"/>
            </button>
        </section>
    )
}
