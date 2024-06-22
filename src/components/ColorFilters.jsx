import React from 'react'

const ColorFilters = ({handleFilterClick}) => {
  return (
    <div className="flex flex-wrap">
          <label className="mr-4 mb-2">
          <input
              type="checkbox"
              id="color-red"
              name="color"
              value="red"
              checked={filters.find((f) => f.type === 'color' && f.value === 'red')}
              onChange={(e) => handleFilterClick('color', e.target.value)}
              className="appearance-none w-4 h-4 border border-none  bg-red-500 focus:ring-red-500 focus:ring-opacity-50"

            />
            Red
          </label>
          <label className="mr-4 mb-2">
          <input
              type="checkbox"
              id="color-red"
              name="color"
              value="red"
              checked={filters.find((f) => f.type === 'color' && f.value === 'red')}
              onChange={(e) => handleFilterClick('color', e.target.value)}
              className="appearance-none w-4 h-4 border border-none  bg-black focus:ring-black focus:ring-opacity-50"

            />
            Black
          </label>
          </div>
  )
}

export default ColorFilters