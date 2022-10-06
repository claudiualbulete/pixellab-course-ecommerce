import { useState } from "react";

export const FilterControls = ({ toggleFilters }) => {
    const [showFilters, setShowFilters] = useState(false);

    const handleToggleFilters = () => {
        const newState = !showFilters;

        setShowFilters(newState);
        toggleFilters && toggleFilters(newState);
    }

    return (
        <section className="flex justify-center items-center">
            <button title="Filter Controls"
                    className={`border w-32 h-20 flex items-center justify-center ${showFilters ? 'bg-black text-white' : ''}`}
                    onClick={handleToggleFilters}
            >
                Filter
            </button>
        </section>
    )
}
