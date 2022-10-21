import { AiFillStar } from "react-icons/ai";

const getStarColor = (current, total) => {
    return total >= current ? "text-black" : "text-gray-300"
}

export const ProductRating = ({ rating, showReviewers = false }) => {
    if (!rating) return false;

    const stars = Math.round(rating.rate);
    const reviewers = rating.count;

    return (
        <div className="flex items-center" title={`From ${reviewers} reviewers`}>
            <AiFillStar className={getStarColor(1, stars)}/>
            <AiFillStar className={getStarColor(2, stars)}/>
            <AiFillStar className={getStarColor(3, stars)}/>
            <AiFillStar className={getStarColor(4, stars)}/>
            <AiFillStar className={getStarColor(5, stars)}/>

            {showReviewers && (
                <span className="ml-6">({reviewers} Reviewers)</span>
            )}
        </div>
    );
}