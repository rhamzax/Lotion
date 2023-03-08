const Sidebar = () => {
  
  return (
    <div className='border-r-2 overflow-y-auto'>
      <div className='flex justify-between py-2 px-4 border-b-2'>
        <h1 className="text-2xl font-bold text-center">Notes</h1>
        <button className='text-xl'>+</button>
      </div>
      <div>
        {/* Add Notes here */}
      </div>
    </div>
  )
}

export default Sidebar