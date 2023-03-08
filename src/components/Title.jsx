const Title = () => {
  return (
    <div className='flex justify-between items-center px-3 py-4 border-b-2'>
      <div>
        <h1 className='text-2xl font-bold'>Note Title</h1>
        <h2 className='text-xs text-gray-500'>Febuary 21, 2023 at 8:26 PM</h2>
      </div>
      <div className='flex gap-8'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Title