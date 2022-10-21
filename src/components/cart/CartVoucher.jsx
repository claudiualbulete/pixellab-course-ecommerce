export const CartVoucher = () => {
    const handleApplyCoupon = () => {
        console.log('coupon will be applied');
    }

    return (
        <div className="inline mb-6 lg:mb-0">
            <input type="text" className="border px-6 py-3 mr-3" placeholder="Coupon Code"/>

            <button className="border border-black border-2 px-6 py-3" onClick={handleApplyCoupon}>Apply
                Coupon
            </button>
        </div>
    )
}