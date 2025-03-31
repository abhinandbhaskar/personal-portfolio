import React from 'react'
import "./ContactMe.css"
const ContactMe = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl rounded-lg">
       
        <div className="py-6 px-8 flex justify-center items-center rounded-t-lg">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contact <span className="text-green-800">Me!</span>
          </h1>
        </div>

 
        <div className="p-8 space-y-6">
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullname"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="block w-full rounded-lg text-white border-gray-300 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-3"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full rounded-lg text-white border-gray-300 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-3"
                placeholder="Enter your email"
              />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="block w-full rounded-lg text-white border-gray-300 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-3"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full rounded-lg text-white border-gray-300 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-3"
                placeholder="Enter the subject"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full rounded-lg text-white border-gray-300 bg-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm p-3"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 text-white font-medium text-sm rounded-xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
