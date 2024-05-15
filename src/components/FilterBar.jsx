import React, {useState} from 'react'

const FilterBar = ({onFilterChange}) => {
  const [filters, setFilters] = useState([]);

  const handleFilterClick = (type, value) =>{
    const newFilters = [...filters];
    if(newFilters.find((f) => f.type === type)){
      newFilters.splice(
        newFilters.findIndex((f) => f.type === type),
        1
      );
    }else{
      newFilters.push({type, value});
    }
    setFilters(newFilters);
    onFilterChange(newFilters)
  }

  return (
    <div>FilterBar</div>
  )
}

export default FilterBar