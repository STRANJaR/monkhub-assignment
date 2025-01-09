

const CategoriCard = ({ image, title, arrivalQnt }) => {
    return (
        <div className='h-28 w-[550px] rounded-md p-2 bg-gray-100 border cursor-pointer'>
            <div className='flex flex-row gap-3 '>
                <div>
                    <img
                        className='h-20 w-20 rounded-md mix-blend-darken'
                        src={image} alt="category img" />
                </div>

                <div className='flex flex-col '>
                    <span className='text-lg font-semibold'>{title}</span>
                    <span className='text-sm py-3'>{arrivalQnt}+ New Arrivals</span>
                </div>
            </div>
        </div>
    )
}

export default CategoriCard