export const CartCheckoutSection = ({ name, children }) => {
    return (
        <div className="flex border-b-2 border-slate-100 border-solid w-full">
            <div className="w-1/3 p-4">
                {name}
            </div>

            <div className="w-2/3 p-4">
                {children}
            </div>
        </div>
    )
}
