import CategoriCard from './CategoriCard'
import Navbar from './Navbar'

const CategoriesPage = () => {
    return (
        <>
            <Navbar />
            <section className='h-screen w-full'>
                <h1 className='text-3xl font-bold py-8 text-center'>Popular Categories</h1>

                <div className='flex flex-row items-center justify-center  '>
                    <div className='flex flex-row justify-center flex-wrap gap-6 p-10'>
                        <CategoriCard
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OaLEqEth9EzNbFt2lvsuTz2hONi_-PIL7A&s'}
                            title={'Shoe'}
                            arrivalQnt={250}
                        />

                        <CategoriCard
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa3IKAnnl0JbnfuqE83b2h0_OPHZ9gSd5bg&s'}
                            title={'Furniture'}
                            arrivalQnt={349}
                        />

                        <CategoriCard
                            image={'https://img.freepik.com/free-psd/3d-blue-headphones-isolated-transparent-background_191095-16409.jpg'}
                            title={'Headphones'}
                            arrivalQnt={460}
                        />

                        <CategoriCard
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmL2EXnUgGUZM70qiYxef8WrHclJY4ewcN6A&s'}
                            title={'Bag'}
                            arrivalQnt={210}
                        />

                        <CategoriCard
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0blDwj7k5uLqIF3i_xA3uqq0c7in4n4CYqg&s'}
                            title={'Laptop'}
                            arrivalQnt={60}
                        />

                        <CategoriCard
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1eq8dsRGUIWNEAssyQoScuvYYaYxtPwO-g&s'}
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