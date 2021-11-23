function Card({ title, description }) {
    return (
        <div className='w-1/4 bg-red-600 space-x-2 shadow-xl border rounded-md p-10'>
            <h1 className='text-lg font-semibold text-gray-200 text-left'>{title}</h1>
            <p className='text-white text-right'>{description}</p>
        </div>
    )
}

export default Card
