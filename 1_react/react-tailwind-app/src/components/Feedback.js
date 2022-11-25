import React from 'react'

const Feedback = () => {
    const avatar = "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc"
    return (
        <section id="testimonials" className='w-full my-24 text-white bg-slate-700'>
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center py-12">

                <h2 className="text-4xl font-bold text-center">
                    Testimonials
                </h2>
                <p className='py-8 text-2xl text-center text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
                    ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
                    nostrum tempore.
                </p>

                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div
                        className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
                    >
                        <img src={avatar} className="w-16 -mt-14 rounded-full " alt="" />
                        <h5 className="text-lg font-bold">Ali Ko</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                            placerat.”
                        </p>
                    </div>

                    <div
                        className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
                    >
                        <img src={avatar} className="w-16 -mt-14 rounded-full " alt="" />
                        <h5 className="text-lg font-bold">Becko Ha</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                            placerat.”
                        </p>
                    </div>

                    <div
                        className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
                    >
                        <img src={avatar} className="w-16 -mt-14 rounded-full " alt="" />
                        <h5 className="text-lg font-bold">Daniel Ho</h5>
                        <p className="text-sm text-darkGrayishBlue">
                            “Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                            placerat.”
                        </p>
                    </div>
                </div>

                <button className=" px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
                    Get Started
                </button>
            </div>
        </section>
    )
}

export default Feedback