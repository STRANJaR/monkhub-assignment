import { Circle, Star } from 'lucide-react';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import QuantityControl from './QuantityControl';
import ReviewCard from './ReviewCard';
import axios from 'axios';
import { singleProductDetails } from '../constants/productsData.js'
import Navbar from './Navbar.jsx';


const ProductDetails = () => {

  const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;
  const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

  if (!rapidApiHost || !rapidApiKey) {
    throw new Error("Missing rapid api host or key");
  }

  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(singleProductDetails);
  const [selectedImage, setSelectedImage] = useState(productDetails.data?.product_photos[0]);


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://real-time-product-search.p.rapidapi.com/product-details?product_id=${id}&country=us&language=en`,
          {
            headers: {
              "x-rapidapi-host": rapidApiHost,
              "x-rapidapi-key": rapidApiKey
            }
          }
        );
        console.log(response);
        setProductDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProductDetails();
  }, [])


  return (
    <>
      <Navbar />
      <section className='h-[1200px] w-full'>
        <div className='flex flex-row gap-2 h-auto w-full p-5'>

          {/* left section  */}
          <div className='w-1/2 '>

            <div className='flex flex-col justify-center gap-5 p-10'>

              <div className='bg-gray-200 rounded-md'>
                <img
                  className='rounded-md mix-blend-darken h-96'
                  src={selectedImage || productDetails.data?.product_photos[0]} alt="" />
              </div>

              <div className='flex flex-row gap-4 justify-between'>
                <img
                  className={`h-24  hover:bg-gray-400 p-1 w-32 rounded-md transition-all cursor-pointer
                  ${selectedImage === productDetails.data?.product_photos[1] ? "bg-gray-400" : ""}
                  `}
                  src={productDetails.data?.product_photos[1]} alt=""
                  onClick={() => setSelectedImage(productDetails.data?.product_photos[1])}
                />

                <img
                  className={`h-24  hover:bg-gray-400 p-1 w-32 rounded-md transition-all cursor-pointer
                  ${selectedImage === productDetails.data?.product_photos[2] ? "bg-gray-400" : ""}
                  `}
                  src={productDetails.data?.product_photos[2]} alt=""
                  onClick={() => setSelectedImage(productDetails.data?.product_photos[2])}
                />

                <img
                  className={`h-24  hover:bg-gray-400 p-1 w-32 rounded-md transition-all cursor-pointer
                  ${selectedImage === productDetails.data?.product_photos[3] ? "bg-gray-400" : ""}
                  `}
                  src={productDetails.data?.product_photos[3]} alt=""
                  onClick={() => setSelectedImage(productDetails.data?.product_photos[3])}
                />

                <img
                  className={`h-24  hover:bg-gray-400 p-1 w-32 rounded-md transition-all cursor-pointer
                  ${selectedImage === productDetails.data?.product_photos[4] ? "bg-gray-400" : ""}
                  `}
                  src={productDetails.data?.product_photos[4]} alt=""
                  onClick={() => setSelectedImage(productDetails.data?.product_photos[4])}
                />


              </div>
            </div>

          </div>

          {/* Right section */}

          <div className='w-1/2  h-[750px]'>
            <div className='flex flex-col justify-center gap-1 px-10 py-10'>
              <h1 className='text-3xl font-bold'>{productDetails.data?.product_title}</h1>
              <p className='text-sm font-normal'>{productDetails.data?.product_description.slice(0, 200)}... </p>
              <span
                className='flex flex-row items-center gap-1 py-2'>
                <Star className='h-4 w-4 text-green-500 fill-green-500' />
                <Star className='h-4 w-4 text-green-500 fill-green-500' />
                <Star className='h-4 w-4 text-green-500 fill-green-500' />
                <Star className='h-4 w-4 text-green-500 fill-green-500' />
                <Star className='h-4 w-4 text-green-500 fill-green-500' />
                <span className='text-sm font-medium'>{productDetails.data?.product_rating}</span>
              </span>

              <span className='text-sm font-bold pt-2'>Price range</span>
              <span className='text-3xl font-bold'>
                {productDetails.data?.typical_price_range[0]} - {productDetails.data?.typical_price_range[1]}
              </span>
            </div>


            <div className='flex flex-col gap-3 justify-between px-10'>
              <span className='text-sm font-bold'>Product colors</span>
              <div className='flex flex-row gap-3 items-center'>

                <Circle className='h-12 w-12 cursor-pointer  text-gray-200 hover:text-gray-300 fill-red-500 ' />
                <Circle className='h-12 w-12 cursor-pointer  text-gray-200 hover:text-gray-300 fill-blue-500 ' />
                <Circle className='h-12 w-12 cursor-pointer  text-gray-200 hover:text-gray-300 fill-yellow-500 ' />
                <Circle className='h-12 w-12 cursor-pointer  text-gray-200 hover:text-gray-300 fill-gray-500 ' />
              </div>

              <span className='text-sm font-bold'>Quantity</span>
              <QuantityControl />

              <div className='flex flex-row items-center gap-3 py-6'>
                <Link
                  to={`/checkout/${id}`}
                  className='py-3 px-20 border text-sm border-zinc-800 bg-zinc-800 text-white rounded-full transition-all'
                >Buy now</Link>

                <button
                  className='py-3 px-20 border text-sm border-zinc-800 hover:bg-zinc-800 hover:text-white rounded-full transition-all'
                >Add to cart</button>
              </div>

              <div className=''>
                <span className='text-sm font-bold'>Offers</span>
                <Link
                  to={productDetails.data?.offer.offer_url}
                  className='flex flex-row items-center gap-3 bg-gray-200 hover:bg-gray-300 transition-all p-2 rounded-md'>
                  <img src={productDetails.data?.offer.store_favicon} alt="logo" />
                  <div className='flex flex-col text-sm'>
                    <span className='font-semibold'>{productDetails.data?.offer.store_name}</span>
                    <span>{productDetails.data?.offer.price}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className='bg-gray-100 h-auto w-full p-8'>
          <h1 className='text-3xl font-bold p-5 text-center'>Reviews</h1>
          <ReviewCard
            reviewId={productDetails.data?.reviews_sample[0].review_id}
            reviewTitle={productDetails.data?.reviews_sample[0].review_title}
            reviewAuthor={productDetails.data?.reviews_sample[0]?.review_author}
            reviewText={productDetails.data?.reviews_sample[0].review_text}
            rating={productDetails.data?.reviews_sample[0].rating}
            reviewDatetime={productDetails.data?.reviews_sample[0].review_datetime_utc}
          />
        </div>
      </section>

    </>

  )
}

export default ProductDetails

