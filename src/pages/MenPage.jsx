import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setFilters } from "../store/productSlice";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const MenPage = () => {
  const dispatch = useDispatch();
  const productsData = useSelector(selectProducts);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  //   console.log("products data", productsData);
  const { products } = productsData;
  const menProduct = products[1];
  //   console.log('men product', menProduct);

  useEffect(() => {
    dispatch(setFilters({ filterType: "category", value: "men" }));
  }, [dispatch]);

  const handleFilterChange = (filters) => {
    const updatedProducts = productsData.filter((product) => {
      let match = true;
      for (const filter of filters) {
        if (product[filter.type] !== filter.value) {
          match = false;
          break;
        }
      }
    });
    setFilteredProducts(updatedProducts);
  };

  return (
    <>
      <section className=" container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">Men's Clothing</h1>
        <div className="flex flex-wrap mb-8">
          {/* filters */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="text-lg font-medium mb-2">Filters</h2>
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
          {/*  */}
          <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-lg font-medium mb-2">Sort By</h2>
          </div>
        </div>
        <ProductList products={menProduct} />
      </section>
    </>
  );
};

export default MenPage;
