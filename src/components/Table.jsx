import React from 'react'

const Table = () => {
  return (
    <>
      <div className='bg-[#2E3192] p-8 md:p-4 md:pl-8 rounded-[8px] text-white lg:sticky md:sticky top-[50px]'>
        <h1 className='text-2xl'>Table of Content</h1>
        <ul className='list-decimal underline leading-loose'>
          <li>
            <a href="#i&d" className='font-semibold'>Interpretation and Definitions</a>
          </li>
          <a className='block font-light' href="#interpretation">Interpretation</a>
          <a className='block font-light' href="#definitions">Definitions</a>
          <li>
            <a href="#collecting" className='font-semibold'>Collecting and Using Your Personal Data</a>
          </li>
          <a className='block font-light' href="#types">Types of Data Collected</a>
          <a className='block font-light' href="#use">Use of Your Personal Data</a>
          <a className='block font-light' href="#retention">Retention of Your Personal Data</a>
          <a className='block font-light' href="#transfer">Transfer of Your Personal Data</a>
          <a className='block font-light' href="#delete">Delete Your Personal Data</a>
          <a className='block font-light' href="#disclosure">Disclosure of Your Personal Data</a>
          <a className='block font-light' href="#security">Security of Your Personal Data</a>
          <li>
            <a href="#children" className='font-semibold'>Children's Privacy</a>
          </li>
          <li>
            <a href="#links" className='font-semibold'>Links to Other Websites</a>
          </li>
          <li>
            <a href="#changes" className='font-semibold'>Changes to this Privacy Policy</a>
          </li>
          <li>
            <a href="#contact" className='font-semibold'>Contact Us</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Table
