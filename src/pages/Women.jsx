import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setFilters } from "../store/productSlice";
import ProductList from "../components/ProductList";
import FilterBar from "../components/FilterBar";

const Women = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.products.cart);
  const productsData  = useSelector((state)=> state.products.products);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  console.log('women page', productsData);  
  const womenProduct = productsData[2]
  console.log('women data', womenProduct);
    // console.log('womenProduct', womenProduct); 
    // const [filteredProducts, setFilteredProducts] = useState(productsData);
      // console.log("products data", productsData.products[1]);
    // const { products } = productsData;
    // const menProduct = productsData.products;
    //   console.log('men product', menProduct);
  
    useEffect(() => {
      dispatch(setFilters({ filterType: "category", value: "women" }));
    }, []);
  
    
    const handleAddToCart = (product) =>{
      const productId = product.id;
      // console.log('product id', productId);
      // console.log('which product is added', product);
      dispatch(addToCart(product));
    }
  
    const handleFilterChange = (filters) => {
      const updatedProducts = womenProduct.filter((product) => {
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
          <h1 className="text-3xl text-center font-bold mb-8">Women's cloth</h1>
          <div className="flex flex-wrap mb-8 justify-evenly">
            <ProductList products={womenProduct} addToCart={addToCart} cart={cart}  />
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
}

export default Women