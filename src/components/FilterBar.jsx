import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(15);
  const [maxPrice, setMaxPrice] = useState(200);
  const [selectedRange, setSelectedRange] = useState(null);

  const handlePriceChange = (event) => {
    const value = parseInt(event.target.value);
    if (event.target.value === "min-price") {
      setMinPrice(Math.min(value, maxPrice));
    } else if (event.target.value === "max-price") {
      setMaxPrice(Math.max(value, minPrice));
    }
  };

  const handleRangeChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedRange(value);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    onFilterChange({
      ...filters,
      priceRange: { min: minPrice, max: maxPrice },
    });
  };

  const handleFilterClick = (type, value) => {
    const newFilters = [...filters];
    if (newFilters.find((f) => f.type === type)) {
      newFilters.splice(
        newFilters.findIndex((f) => f.type === type),
        1
      );
    } else {
      newFilters.push({ type, value });
    }
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <section className="flex flex-col bg-gray-200 h-full w-full">
      <div className="mr-4 mb-4">
        <h3 className="text-base font-medium mb-2 ml-3 mt-4">Filters: </h3>
        <h4 className="text-base font-medium mb-2 ml-3 mt-4">Colors</h4>
        {/* Color filter */}
        <div className="grid grid-cols-3 gap-4">
          <label className="ml-4 mb-2">
            <input
              type="checkbox"
              id="color-red"
              name="color"
              value="red"
              // checked={filters.find(
              //   (f) => f.type === "color" && f.value === "red"
              // )}
              checked={false}
              onChange={(e) => handleFilterClick("color", e.target.value)}
              className="appearance-none w-4 h-4 border border-none bg-red-500 focus:ring-red-500 focus:ring-opacity-50"
            />
            Red
          </label>
          <label className="ml-4 mb-2">
            <input
              type="checkbox"
              id="color-black"
              name="color"
              value="black"
              checked={false}
              onChange={(e) => handleFilterClick("color", e.target.value)}
              className="appearance-none w-4 h-4 border border-none bg-black focus:ring-black focus:ring-opacity-50"
            />
            Black
          </label>
          <label className="ml-4 mb-2">
            <input
              type="checkbox"
              id="color-blue"
              name="color"
              value="blue"
              checked={false}
              onChange={(e) => handleFilterClick("color", e.target.value)} // typo fixed
              className="appearance-none w-4 h-4 border border-none bg-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            />
            Blue
          </label>
          <label className="ml-4 mb-2">
            <input
              type="checkbox"
              id="color-blue"
              name="color"
              value="blue"
              checked={filters.find(
                (f) => f.type === "color" && f.value === "blue"
              )}
              onChange={(e) => handleFilterClick("color", e.tvalue)} // typo fixed
              className="appearance-none w-4 h-4 border border-none bg-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
            />
            Blue
          </label>
          {/* Add more color filters here */}
        </div>
        {/* Product type filter */}
        <h4 className="text-base font-medium mb-2 ml-3 mt-4">Product Type</h4>
        <div className="flex flex-col">
          <div className="flex justify-start ml-5 gap-4 items-center">
            <FiPlus
              className=" cursor-pointer"
              onClick={() => handleFilterClick("type", "winter")}
            />
            <p>Winter</p>
          </div>
          <div className="flex justify-start ml-5 gap-4 items-center">
            <FiPlus
              className=" cursor-pointer"
              onClick={() => handleFilterClick("type", "summer")}
            />
            <p>Summer</p>
          </div>
        </div>
        {/* size filter */}

        <h4 className="text-base font-medium mb-2 ml-3 mt-4">Size</h4>
        <div className="grid grid-cols-3 gap-4">
          <button
            type="button"
            className="flex justify-center items-center w-full h-8 rounded-lg border focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-500"
            onClick={() => handleFilterClick("size", "xs")}
          >
            XS
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full h-8 rounded-lg border focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-500"
            onClick={() => handleFilterClick("size", "s")}
          >
            S
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full h-8 rounded-lg border focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-500"
            onClick={() => handleFilterClick("size", "m")}
          >
            M
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full h-8 rounded-lg border focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-500"
            onClick={() => handleFilterClick("size", "l")}
          >
            L
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full h-8 rounded-lg border focus:outline-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-500"
            onClick={() => handleFilterClick("size", "xl")}
          >
            XL
          </button>
        </div>
        {/* prize filter */}
        <h4 className="text-base font-medium mb-2 ml-3 mt-4">Prize</h4>
        <div className="flex items-center">
          <p className="mr-2">
            $<span id="min-price-value">{minPrice}</span>
          </p>
          <input
            type="range"
            id="min-price"
            min="15"
            max="200"
            value={selectedRange === null ? minPrice : selectedRange}
            className="w-full h-2 rounded-lg bg-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500"
            onChange={handlePriceChange}
            onMouseMove={handleRangeChange}
          />
          <p className="ml-2">
            $<span id="max-price-value">{maxPrice}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
