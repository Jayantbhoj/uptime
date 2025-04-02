"use client"
import React, { useState } from 'react'
import Navbar from '../../components/navbar'
import { addWebsite } from '../../actions/dashboardActions';

const page = () => {
  const [url, seturl] = useState("");
  function handleSubmit(){
    
    try{
      addWebsite(url);
      alert("website added")
    }catch(error){
      alert("failed to add website")
    }

  }
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center p-6'>
      Welcome to dashboard
    </div>
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-2">
      <input 
        type="text"
        placeholder="Enter your url"
        value={url}
        onChange={(e) => seturl(e.target.value)}
        className="border border-white p-2 rounded w-80 mt-2 bg-black text-white placeholder-gray-400"
      />
      <button 
        type="submit" 
        className="bg-white text-black px-4 py-2 rounded w-80 hover:bg-gray-200 transition cursor-pointer"
      >
        Submit
      </button>
    </form>
    </>
  )
}

export default page
