import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create Listing</h1>
      <form className='flex flex-col sm:flex-row gap-7'>
        <div className='flex flex-col gap-4 flex-1'>
          <input type="text" placeholder='Name' className='border p-3 rounded-lg' id='name' maxLength='50' minLength='10' required/>
          <input type="text" placeholder='Description' className='border p-3 rounded-lg my-0.5' id='description' required/>
          <input type="text" placeholder='Address' className='border p-3 rounded-lg my-0.5' id='address' required/>
          <div className='flex gap-5 flex-wrap my-1'>
            <div className='flex gap-2'>
              <input type="checkbox" id='sell' className='w-5'/>
              <span>Sell</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='rent' className='w-5'/>
              <span>Rent</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='parking' className='w-5'/>
              <span>Parking Spot</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='furnished' className='w-5'/>
              <span>Furnished</span>
            </div>
            <div className='flex gap-2'>
              <input type="checkbox" id='offer' className='w-5'/>
              <span>Offer</span>
            </div>
          </div>
          <div className='flex flex-wrap gap-6 my-1'>
            <div className='flex items-center gap-2'>
              <input type="number" id='bedrooms' min='1' max='30' required className='p-3 border border-gray-300 rounded-lg'/>
              <p>Bedrooms</p>
            </div>
            <div className='flex items-center gap-2'>
              <input type="number" id='bathrooms' min='1' max='30' required className='p-3 border border-gray-300 rounded-lg'/>
              <p>Baths</p>
            </div>
            <div className='flex items-center gap-2'>
              <input type="number" id='regularPrice' min='1' max='30' required className='p-3 border border-gray-300 rounded-lg'/>
              <div className='flex flex-col items-center'>
                <p>Regular Price</p>
                <span className='text-xs'>($ / month)</span>
              </div>
              
            </div>
            <div className='flex items-center gap-2'>
              <input type="number" id='discountPrice' min='1' max='30' required className='p-3 border border-gray-300 rounded-lg'/>
              <div className='flex flex-col items-center'>
                <p>Discounted Price</p>
                <span className='text-xs'>($ / month)</span>
              </div>
            </div>

          </div>
        </div>
        <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold my-0.5'>Images:
          <span className='font-normal text-gray-700 ml-2 my-0.5 '>The First Image Will Be The Cover (Max 6)</span>
          </p>
          <div className='flex gap-4'>
            <input className='p-3 border border-gray-300 rounded w-full my-0.5' type="file" id='images' accept='image/*' multiple/>
            <button className='p-3 text-green-700 border border-green-700 rounded my-0.5 uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
          </div>
          <button className='p-3 bg-gray-700 text-white rounded-lg mt-2 uppercase font-semibold hover:bg-opacity-90 disabled:opacity-80'>Create Listing</button>

        </div>
        

      </form>
    </main>
  )
}
