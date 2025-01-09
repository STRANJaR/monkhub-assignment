import React, { useState } from 'react';

const QuantityControl = ({ initialQuantity = 1 }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className="flex items-center justify-center space-x-4 bg-gray-300 rounded-full w-36">
            <button
                onClick={decrementQuantity}
                className=" w-full font-extrabold text-zinc-800 px-4 py-2 rounded-lg disabled:opacity-50"
                disabled={quantity <= 1}
            >
                -
            </button>
            <span className="text-sm font-semibold">{quantity}</span>
            <button
                onClick={incrementQuantity}
                className=" w-full font-extrabold text-zinc-800 px-4 py-2 rounded-lg"
            >
                +
            </button>
        </div>
    );
};

export default QuantityControl;