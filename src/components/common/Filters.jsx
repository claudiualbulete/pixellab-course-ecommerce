import { FILTERS } from '../../constants';

export const FilterSection = ({ id, title, options, onSelect }) => {
    const handleOptionSelect = (selectedOption) => {
        onSelect && onSelect([id, selectedOption]);
    }

    if (options.length <= 0) {
        return false;
    }

    return (
        <section className="w-full md:w-1/2 lg:w-1/4">
            <h1 className="font-bold mb-8 uppercase">{title}</h1>

            <ul>
                {options.map(option => (
                    <li key={option.key}>
                        <button className="py-1" onClick={() => handleOptionSelect(option.key)}>
                            {option.value}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export const Filters = () => {
    return (
        <div className="flex p-20 justify-between flex-wrap mx-auto bg-black text-white">
            {FILTERS.map(filterSection => (
                <FilterSection key={filterSection.id} title={filterSection.title} options={filterSection.options}/>
            ))}
        </div>
    )
}
