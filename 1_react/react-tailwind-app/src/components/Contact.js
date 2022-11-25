import React from "react";

const Contact = () => {
    return (
        <section
            name="contact"
            className="w-full h-screen p-4 bg-gradient-to-b"
        >
            <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">

                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Contact</h2>
                    <p className='py-6 text-3xl text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
                </div>

                <div className="flex items-center justify-center ">
                    <form
                        className="flex flex-col w-full md:w-1/2"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
                        ></textarea>

                        <button className="flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
