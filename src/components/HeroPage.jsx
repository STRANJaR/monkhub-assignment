

const HeroPage = () => {
    return (
        <div className='h-80 w-full py-6 px-12'>
            <div className='h-full w-full rounded-md bg-yellow-300 flex flex-row justify-between items-center px-8'>
                <div className=' h-full w-1/2 flex flex-col gap-4 p-8'>
                    <h1 className='text-[2.5rem] font-semibold'>Grab Upto 50% Off On Selected Headphones</h1>
                    <button
                        className='w-36 py-2 px-10 my-2 border text-sm border-zinc-800 bg-zinc-800 text-white rounded-full transition-all'
                    >Buy Now</button>
                </div>

                <div className=''>
                    <img
                        className='h-[17rem] bg-none'
                        src="/hero.png" alt="hero" />
                </div>
            </div>
        </div>
    )
}

export default HeroPage