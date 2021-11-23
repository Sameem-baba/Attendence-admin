
function CardDate({ description, title }) {
    return (
        <div className='w-1/4 justify-center items-center space-x-2 shadow-xl border rounded-md flex'>
            <h1 className='text-lg font-semibold text-gray-200'>{title}</h1>
            <p className='text-white'>-</p>
            <p className='text-white'>{description}</p>
        </div>
    )
}

export default CardDate;