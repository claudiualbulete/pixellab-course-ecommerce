import { BsArrowDown } from "react-icons/bs";

export const Loader = () => {
    return (
        <div className="bg-gray-200 w-full h-96 flex justify-center items-center">
                            <span className="animate-bounce">
                                <BsArrowDown size="60"/>
                            </span>

            Fetching, Please wait!
        </div>
    )
}