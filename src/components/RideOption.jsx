import { FaUser } from "react-icons/fa";

const RideOption = ({
    image,
    title,
    seats,
    time,
    description,
    price,
    onSelect
}) => {
    return (
        <div
            onClick={onSelect}
            className="flex items-center gap-3 w-full rounded-xl border border-transparent hover:border-black hover:shadow-md cursor-pointer transition mb-3"
        >
            <div className="flex items-center gap-4">
                <img
                    src={image}
                    alt={title}
                    className="w-16"
                />
                <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        {title}
                        <span className="flex items-center gap-1 text-sm text-gray-600">
                            <FaUser /> {seats}
                        </span>
                    </h3>
                    <p className="text-sm text-gray-600">
                        {time}
                    </p>
                    <p className="text-sm text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
            <div className="text-lg font-semibold">
                ₹{price}
            </div>

        </div>
    );
};

export default RideOption;