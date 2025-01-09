import CategoriCard from './CategoriCard'
import Navbar from './Navbar'

const CategoriesPage = () => {
    return (
        <>
            <Navbar />
            <section className='h-screen w-full'>
                <h1 className='text-3xl font-bold py-8 text-center'>Popular Categories</h1>

                <div className='flex flex-row items-center justify-center  '>
                    <div className='flex flex-row flex-wrap gap-6 p-10'>
                        <CategoriCard
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OaLEqEth9EzNbFt2lvsuTz2hONi_-PIL7A&s'}
                            title={'Shoe'}
                            arrivalQnt={250}
                        />

                        <CategoriCard
                            image={''}
                            title={'Furniture'}
                            arrivalQnt={349}
                        />

                        <CategoriCard
                            image={''}
                            title={'Headphones'}
                            arrivalQnt={460}
                        />

                        <CategoriCard
                            image={''}
                            title={'Bag'}
                            arrivalQnt={210}
                        />

                        <CategoriCard
                            image={''}
                            title={'Laptop'}
                            arrivalQnt={60}
                        />

                        <CategoriCard
                            image={''}
                            title={'Book'}
                            arrivalQnt={100}
                        />

                    </div>
                </div>
            </section>

        </>

    )
}

export default CategoriesPage