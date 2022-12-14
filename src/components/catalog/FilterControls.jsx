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
                    className={`border w-32 h-16 lg:h-20 flex items-center justify-center transition-all transition-700 transform-gpu ${showFilters ? 'bg-black text-white' : ''}`}
                    onClick={handleToggleFilters}
            >
                {showFilters ? 'Hide Filter' : 'Filter'}
            </button>
        </section>
    )
}
