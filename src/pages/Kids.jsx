import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectProducts, setFilters } from "../store/productSlice";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const Kids = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.products.cart);
    
  
    const productsData  = useSelector((state)=> state.products.products);
    const KidsProduct = productsData[3];
    const [filteredProducts, setFilteredProducts] = useState(productsData);
  
    useEffect(() => {
      dispatch(setFilters({ filterType: "category", value: "kid" }));
    }, [dispatch]);
  
    
    const handleAddToCart = (product) =>{
      const productId = product.id;
      console.log('product id', productId);
      console.log('which product is added', product);
      dispatch(addToCart(product));
    }
  
    const handleFilterChange = (filters) => {
      const updatedProducts = KidsProduct.filter((product) => {
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
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-3xl text-center font-bold mb-8">Kid's cloth</h1>
          <div className="flex mb-8 gap-4 justify-around">
            <ProductList products={KidsProduct} addToCart={addToCart} cart={cart}  />
            {/* filters */}
            <div className="">
              <FilterBar onFilterChange={handleFilterChange} />
            </div>
          </div>
            {/*  */}
            {/* <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
              <h2 className="text-lg font-medium mb-2">Sort by</h2>
            </div> */}
        </section>
      </>
    );
}

export default Kids