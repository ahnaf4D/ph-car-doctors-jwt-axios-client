const Product = ({ product }) => {
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={product.img} alt='Shoes' />
      </figure>
      <div className='card-body '>
        <h2 className=' text-center text-2xl font-semibold'>{product.name}</h2>
        <p className='text-3xl font-bold text-center text-orange-600'>
          ${product.price}
        </p>
      </div>
    </div>
  );
};

export default Product;
