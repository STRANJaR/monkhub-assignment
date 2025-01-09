import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { singleProductDetails } from '../constants/productsData';


const ProductCheckout = () => {

    const rapidApiHost = import.meta.env.VITE_RAPID_API_HOST;
    const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

    if (!rapidApiHost || !rapidApiKey) {
        throw new Error("Missing rapid api host or key");
    }

    const { id } = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState(singleProductDetails);


    const handleCheckout = () => {
        navigate(productDetails.data.product_page_url)
    }
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
            <section className='h-screen w-full'>
                <div className='h-auto w-full flex flex-row items-center justify-between p-10'>
                    <div className='w-1/2 h-screen'>
                        <div className='h-full w-full flex flex-col gap-4 p-3'>
                            <div className='h-1/2 w-full border rounded-md p-5'>
                                <h1 className='font-semibold text-2xl'>Checkout</h1>
                                <div className='py-2'>
                                    <div className='h-48 w-[550px] rounded-md px-2  border flex  justify-between py-5'>
                                        <div className='flex flex-row gap-3 '>
                                            <div className='h-28 w-56'>
                                                <img
                                                    className='h-28 w-28 rounded-md mix-blend-darken'
                                                    src={productDetails.data?.product_photos[0] || ''} alt="category img" />
                                            </div>

                                            <div className='flex flex-col '>
                                                <span className='text-lg font-medium'>{productDetails.data?.product_title}</span>
                                                <span className='text-2xl font-semibold py-4'>{productDetails.data?.typical_price_range[0]}</span>
                                                {/* <span className='text-sm py-3'>{productDetails.data?.product_description.slice(0, 200)}...</span> */}

                                            </div>
                                        </div>

                                        <div>
                                            <span className='text-lg font-semibold'>Price</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='h-1/2 w-full p-5 text-2xl border rounded-md flex flex-col gap-3'>
                                <div className='flex flex-row items-center justify-between'>

                                    <h1 className='font-semibold'>Delivery address</h1>
                                    <span className='font-normal text-xs bg-gray-300 p-2 rounded-sm'>#{productDetails.data.product_id}</span>
                                </div>
                                <div className='flex flex-row items-center gap-8'>
                                    <span className='font-semibold text-sm w-40'>Name : </span>
                                    <span className='text-sm'>Rohit Shrivastav</span>
                                </div>
                                <div className='flex flex-row items-center gap-8'>
                                    <span className='font-semibold text-sm w-40'>Address : </span>
                                    <span className='text-sm'>HN.13, Bijwasan, New Delhi</span>
                                </div>
                                <div className='flex flex-row items-center gap-8'>
                                    <span className='font-semibold text-sm w-40'>Pin code : </span>
                                    <span className='text-sm'>110061</span>
                                </div>
                                <div className='flex flex-row items-center gap-8'>
                                    <span className='font-semibold text-sm w-40'>State : </span>
                                    <span className='text-sm'>Delhi</span>
                                </div>
                                <div className='flex flex-row items-center gap-8'>
                                    <span className='font-semibold text-sm w-40'>Region : </span>
                                    <span className='text-sm'>India</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-1/2 h-screen p-3'>
                        <div className='h-full w-full border rounded-md p-5'>
                            <h1 className='font-semibold text-2xl pb-4'>Order Summary</h1>
                            <div className='bg-gray-200 rounded-full h-14 flex justify-end items-center py-4'>
                                <button
                                    className='w-auto py-4 px-10 my-2 border text-sm border-zinc-800 bg-zinc-800 text-white rounded-full transition-all'
                                >Secured Checkout
                                </button>
                            </div>

                            <div className='py-9'>
                                <h1 className='font-semibold'>Secure payment Options</h1>
                                <div className='flex flex-row gap-3 items-center py-3'>

                                    <div className='flex flex-row items-center border h-10 w-20'>
                                        <img
                                            className='h-8 w-20'
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MUMXz1G7LSmOmsUgtpSVrB_aW4R79Lxv3g&s"
                                            alt=""
                                        />
                                    </div>
                                    <div className='flex flex-row items-center border h-10 w-20'>
                                        <img
                                            className='h-8 w-20'
                                            src="https://e7.pngegg.com/pngimages/530/165/png-clipart-logo-mastercard-pentagram-flat-design-brand-mastercard-text-trademark.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className='flex flex-row items-center border h-10 w-20'>
                                        <img
                                            className='h-8 w-20'
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikA6bP--AkWjx86wnhsTxzYT8gk0J0y1t2Q&s"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <label className='text-sm' htmlFor="promo-code">Enter Promo Code</label>
                                <input
                                    className='w-full h-10 text-sm border rounded-md p-3 focus-visible:outline-none '
                                    type="text"
                                    placeholder='NY2025'
                                />

                                <label className='text-sm' htmlFor="promo-code">Enter Promo Code</label>
                                <input
                                    className='w-full h-10 text-sm border rounded-md p-3 focus-visible:outline-none '
                                    type="text"
                                    placeholder='NY2025'
                                />
                            </div>

                            <div className='py-9 w-full'>
                                <button
                                    onClick={handleCheckout}
                                    className='w-full py-4 px-10 my-2 border text-sm border-zinc-800 bg-zinc-800 text-white rounded-full transition-all'
                                >
                                    Make Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ProductCheckout