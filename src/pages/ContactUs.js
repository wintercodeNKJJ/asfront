import React, { useState } from 'react'
import { AiFillClockCircle, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti'

import ASL from '../assets/ASL.png'

const ContactUs = () => {

  const [Subject, setSubject] = useState('')
  const [Content, setContent] = useState('')
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')

  return (
    <div>
      <div className="px-11 md:px-20 lg:px-40 mt-10">
        <div className="flex justify-center items-center m-4 text-3xl">
          <span>Do you have a project?, Lets start</span>
        </div>
        <div className="h-96 mb-5 border border-gray-300 w-full bg-gray-300">
          map
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          <div className="flex p-6 bg-gray-200 gap-2">
            <div className="rounded-full p-2 text-green-700">
              <TiLocation size={30} />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg">Our Address</div>
              <div className="text-sm">Fokou Douala, Cameroun</div>
            </div>
          </div>

          <a href='mailto:afria@gmail.com'>
            <div className="flex p-6 bg-gray-200 gap-2">
              <div className="rounded-full p-2 text-green-700">
                <AiFillMail size={30} />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">Email us</div>
                <div className="text-sm">Africa@gmail.com</div>
              </div>
            </div>
          </a>

          <div className="flex p-6 bg-gray-200 gap-2">
            <div className="rounded-full p-2 text-green-700">
              <AiFillPhone size={30} />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg">Contact us</div>
              <div className="text-sm">+234598839827</div>
            </div>
          </div>

          <div className="flex p-6 bg-gray-200 gap-2">
            <div className="rounded-full p-2 text-green-700">
              <AiFillClockCircle size={30} />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg">Opening hours</div>
              <div className="text-sm"><span className="font-bold">Mon-Sat:</span>11AM-23PM; <span
                className="font-bold">Sunday:</span>Closed </div>
            </div>
          </div>
        </div>

        <div className="h-full flex rounded-lg overflow-hidden mt-5 mb-20">
          <div className="w-1/5 hidden md:block ">
            <img src={ASL} alt="img" className="h-full object-cover" />
          </div>
          <form method='POST' className='w-full'>
            <div className="flex flex-col w-full gap-2 md:gap-8 p-4 bg-gray-200">
              <div className="md:flex-row flex-col flex justify-between gap-2 md:gap-8">
                <input type="text" placeholder="Name" className="w-full border border-gray-300 p-2 rounded-[4px]" onChange={(e) => { setName(e.target.value) }} />
                <input type="email" placeholder="Email@gmail.com" className="w-full border border-gray-300 p-2 rounded-[4px]" onChange={(e) => { setEmail(e.target.value) }} />
              </div>
              <div className="md:flex-row flex-col flex justify-between gap-2 md:gap-8">
                <input type="text" placeholder="Subject" className="w-full border border-gray-300 p-2 rounded-[4px]" onChange={(e) => { setSubject(e.target.value) }} />
              </div>
              <div className="flex">
                <textarea name="content" id="mailcontent" placeholder="Message..."
                  className="w-full h-96 rounded-md border border-gray-300 p-2" onChange={(e) => { setContent(e.target.value) }} ></textarea>
              </div>
              <div className="flex justify-around">
                <a href={`mailto:africa@gmail.com?subject=${Subject}&body=${Name}..${Email}..${Content}`} className="btn btn-outline btn-success rounded-full w-40">Send</a>
                <button type="reset" className="btn btn-outline btn-error rounded-full w-40">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs