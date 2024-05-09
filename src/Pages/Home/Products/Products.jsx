import { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`/products.json`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='my-12'>
      <article className='text-center'>
        <span className='text-3xl text-orange-500 font-bold'>
          Popular Products
        </span>
        <h1 className='text-5xl font-bold my-3'>Browse Our Products</h1>
        <p className='max-w-lg mx-auto mb-4'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don<>&apos;</>t look even slightly
          believable.
        </p>
      </article>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className='flex justify-center mt-5'>
        <button className='btn btn-error text-white text-xl '>
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
