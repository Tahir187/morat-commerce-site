import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectProducts, setFilters } from "../store/productSlice";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const MenPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.products.cart);

  const productsData  = useSelector((state)=> state.products.products);
  console.log('men page', productsData);  
  const menProduct = productsData[1]
  console.log('men data', menProduct);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // useEffect(() => {
  //   dispatch(setFilters({ filterType: "category", value: "men" }));
  //   const filtered = productsData.products.filter(
  //     (product) => product.category === "men"
  //   );
  //   setFilteredProducts(filtered);
  // }, [dispatch, productsData]);

  
  const handleAddToCart = (product) =>{
    const productId = product.id;
    console.log('product id', productId);
    console.log('which product is added', product);
    dispatch(addToCart(product));
  }

  const handleFilterChange = (filters) => {
    const updatedProducts = menProduct.filter((product) => {
      if (filters.find((f) => f.type === "category" && f.value === "men")) {
        return true; 
      }
      
      return false;
    });
    setFilteredProducts(updatedProducts);
  };

  return (
    <>
      <section className=" container mx-auto px-6 py-16">
        <h1 className="text-3xl text-center font-bold mb-8">Men's Cloth</h1>
        <div className="flex flex-wrap mb-8 justify-evenly">
          <ProductList products={menProduct} addToCart={addToCart} cart={cart}  />
          {/* filters */}
          <div className="">
            <FilterBar onFilterChange={handleFilterChange} />
          </div>
          {/*  */}
          {/* <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
            <h2 className="text-lg font-medium mb-2">Sort by</h2>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default MenPage;
