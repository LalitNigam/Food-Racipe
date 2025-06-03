import { Link } from "react-router-dom";

const RacipeCard = (props) => {
    const { title, image, chef, description, id } = props.recipe || {};
  return (
    <Link
        to={`/recipes/details/${id}`}
        className="mr-3 mb-3 block w-full sm:w-[48%] md:w-[31%] lg:w-[23vw] rounded overflow-hidden"
    >
      <div className="max-w-full mx-auto p-2 sm:p-3 md:p-4">
        <div className="bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.9)] transition-shadow duration-300 transform hover:-translate-y-1">
          <img
            src={image}
            alt="Card Image"
            className="rounded-t-2xl w-full h-40 sm:h-48 md:h-56 object-cover"
          />
          <div className="p-3 sm:p-4 space-y-2 bg-orange-500 rounded-b-2xl">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h1>
            <small className="block text-[15px] sm:text-[16px] text-blue-700 font-bold">{chef}</small>
            <p className="text-gray-900">
              {(description ? description.slice(0, 100) : "")}...{" "}
              <small className="text-blue-600 font-bold">More</small>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RacipeCard;
