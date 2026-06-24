import { Link } from 'react-router-dom'
import mensCollectionImage from '../../assets/mens-collection.webp'
import womensCollectionImage from '../../assets/womens-collection.webp'
const GenderCollectionSection = () => {
    return (
        <section className='py-16 px-4 lg:px-0'>
            <div className='container mx-auto flex flex-col md:flex-row gap-8'>
                <div className='relative flex-1'>
                    <img src={womensCollectionImage} alt='womens collection' className='w-full h-[700px] object-cover'></img>
                    <div className='aboslute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            women's collection
                        </h2>
                        <Link to={'/collections/all?gender=Women'} className='text-gray-900 underline'>
                            shop here
                        </Link>
                    </div>
                </div>
                <div className='relative flex-1'>
                    <img src={mensCollectionImage} alt='mens collection' className='w-full h-[700px] object-cover'></img>
                    <div className='aboslute bottom-8 left-8 bg-white bg-opacity-90 p-4'>
                        <h2 className='text-2xl font-bold text-gray-900 mb-3'>
                            men's collection
                        </h2>
                        <Link to={'/collections/all?gender=Men'} className='text-gray-900 underline'>
                            shop here
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollectionSection