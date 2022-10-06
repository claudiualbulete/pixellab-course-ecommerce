import { MdArrowBackIosNew } from "react-icons/md";

export const Footer = () => {
    const goToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="container flex text-gray-500 p-6 justify-between flex-wrap mx-auto">
                <section className="w-full md:w-1/2 xl:w-1/4">
                    <h1 className="font-bold mb-2 uppercase text-gray-900">Los Angeles</h1>

                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>ullam velit voluptatibus!</li>
                        <li>consectetur adipisicing elit.</li>
                        <li>Aperiam atque cupiditate earum</li>
                    </ul>
                </section>

                <section className="w-full md:w-1/2 xl:w-1/4">
                    <h1 className="font-bold mb-2 uppercase text-gray-900">San Francisco</h1>

                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>ullam velit voluptatibus!</li>
                        <li>consectetur adipisicing elit.</li>
                        <li>Aperiam atque cupiditate earum</li>
                    </ul>
                </section>

                <section className="w-full md:w-1/2 xl:w-1/4">
                    <h1 className="font-bold mb-2 uppercase text-gray-900">New York</h1>

                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>ullam velit voluptatibus!</li>
                        <li>consectetur adipisicing elit.</li>
                        <li>Aperiam atque cupiditate earum</li>
                    </ul>
                </section>

                <section className="w-full md:w-1/2 xl:w-1/4">
                    <h1 className="font-bold mb-2 uppercase text-gray-900">Follow us</h1>

                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>ullam velit voluptatibus!</li>
                        <li>consectetur adipisicing elit.</li>
                        <li>Aperiam atque cupiditate earum</li>
                    </ul>
                </section>
            </div>

            <div className="relative border-t m-6 border-gray-300">
                <button
                    className="absolute order border border-gray-300 text-gray-300 rounded-full text-3xl p-2 bg-gray-100 left-1/2 -top-4 rotate-90"
                    onClick={goToTop}
                >
                    <MdArrowBackIosNew size="20"/>
                </button>
            </div>

            <div className="container text-gray-500 p-6">
                <p className="text-center">&copy; 2022. Design by John Doe</p>
            </div>
        </>
    )
}
