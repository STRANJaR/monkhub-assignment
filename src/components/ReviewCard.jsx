import { BadgeCheck, Star, User } from 'lucide-react'

const ReviewCard = ({ reviewId, reviewTitle, reviewAuthor, reviewText, rating, reviewDatetime }) => {
    return (
        <main className='h-auto w-64 bg-gray-200 rounded-sm'>
            <div className='p-5'>
                <div className='flex flex-row items-center gap-3 justify-start'>
                    <span className='p-2 rounded-full bg-gray-300'>
                        <User className='h-5 w-5' />
                    </span>
                    <h1 className='text-sm font-medium text-zinc-800'>{reviewAuthor}</h1>
                    <span> <BadgeCheck className='h-4 w-4 text-blue-500 ' /> </span>
                </div>

                <div className='py-4'>
                    <div className='flex flex-row gap-1 items-center'>
                        <span className='flex flex-row gap-1 items-center'>
                            <Star className='h-4 w-4 text-green-500 fill-green-500' />
                            <Star className='h-4 w-4 text-green-500 fill-green-500' />
                            <Star className='h-4 w-4 text-green-500 fill-green-500' />
                            <Star className='h-4 w-4 text-green-500 fill-green-500' />
                            <Star className='h-4 w-4 text-green-500 fill-green-500' />
                        </span>
                        <span className='font-medium text-sm'>({rating})</span>
                    </div>

                    <h4 className='text-sm font-medium py-1'>{reviewTitle}</h4>

                    <div className='py-2'>
                        <p className='text-xs '>

                            {reviewText}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ReviewCard