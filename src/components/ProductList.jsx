import { useState } from 'react';
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard';
import { productsData } from '../constants/productsData.js'



const ProductList = () => {

  const [products, setProducts] = useState(productsData);

  return (
    <section className='py-4'>
      <h1 className='text-3xl font-bold text-center py-4'>Products For You!</h1>
      <div className='flex  flex-row flex-wrap justify-center '>

        {products && products.map(product => (
          <Link
            key={product.product_id}
            to={`/product/${product.product_id}`}
          >

            <ProductCard
              key={product.product_id}
              productId={product.product_id}
              productImage={product.product_photos[0]}
              title={product.product_title.slice(0, 22)}
              price={product.typical_price_range}
              description={product.product_description.slice(0, 29)}
              rating={product.product_rating}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ProductList