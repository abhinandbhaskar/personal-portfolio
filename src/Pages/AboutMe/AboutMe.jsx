import React from "react";
import "./AboutMe.css";
import profile from "../../assets/profile.jpg";
const AboutMe = () => {
    return (
      <div className="min-h-screen w-full bg-gray-800 flex flex-col lg:flex-row items-center lg:justify-center px-4">
      <div className="w-full lg:w-1/3 bg-blue-300 flex justify-center py-10 lg:py-20">
        <div className="rounded-full overflow-hidden w-56 h-56 lg:w-64 lg:h-64 shadow-lg">
          <img src={profile} alt="Profile" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="w-full lg:w-2/3 bg-gray-900 text-white p-6 lg:p-12">
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">
          About <span className="text-green-400">Me</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-2">Python Django Full-Stack Developer</h2>
        <h2 className="text-2xl font-semibold mb-4">React Developer</h2>
        <p className="text-gray-300 leading-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio cumque perspiciatis adipisci id. Totam ab, voluptatem rerum, molestias provident unde tenetur commodi quisquam reiciendis iure praesentium repellendus non accusantium dolores!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio cumque perspiciatis adipisci id. Totam ab, voluptatem rerum, molestias provident unde tenetur commodi quisquam reiciendis iure praesentium repellendus non accusantium dolores!
        </p>


        <h2 className="text-3xl font-bold mb-4">Education</h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">SSLC</h3>
          <p className="text-gray-300 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi iusto vitae fugiat, quibusdam expedita possimus doloremque optio, error magnam beatae ipsa ratione facere voluptatum recusandae aut explicabo tenetur. Dignissimos.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Plus Two</h3>
          <p className="text-gray-300 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi iusto vitae fugiat, quibusdam expedita possimus doloremque optio, error magnam beatae ipsa ratione facere voluptatum recusandae aut explicabo tenetur. Dignissimos.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Degree</h3>
          <p className="text-gray-300 leading-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid modi iusto vitae fugiat, quibusdam expedita possimus doloremque optio, error magnam beatae ipsa ratione facere voluptatum recusandae aut explicabo tenetur. Dignissimos.
          </p>
        </div>
      </div>
    </div>
    );
};

export default AboutMe;
