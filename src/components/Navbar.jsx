import { ShoppingCart, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">

                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">Shopcart</Link>
                </div>


                <div className="hidden md:flex items-center space-x-6">
                    <Link to="/categories" className="text-gray-700 font-semibold text-sm hover:text-blue-500">
                        Categories
                    </Link>
                    <Link to="/products" className="text-gray-700 font-semibold text-sm hover:text-blue-500">
                        Deals
                    </Link>
                    <Link to="/about" className="text-gray-700 font-semibold text-sm hover:text-blue-500">
                        What's New
                    </Link>
                    <Link to="/contact" className="text-gray-700 font-semibold text-sm hover:text-blue-500">
                        Delivery
                    </Link>

                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="bg-gray-200 rounded-full text-sm px-8 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>


                <div className="relative flex  flex-row items-center gap-5">
                    <Link className='flex items-center gap-1 bg-blue-100 py-2 px-3 rounded-full transition-all' to="/cart">
                        <User2 className="h-6 w-6 text-gray-700 font-semibold text-sm hover:text-blue-500" />
                        <span className='text-sm font-medium'>Account</span>

                    </Link>
                    <Link className='flex items-center gap-1' to="/cart">
                        <ShoppingCart className="h-6 w-6 text-gray-700 font-semibold text-sm hover:text-blue-500" />

                        cart
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar