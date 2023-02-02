import React, { useState } from 'react'


export const Features = () => {
    const [feature, setFeature] = useState(1)

    const onHandleFeature = (id) => {
        setFeature(id)
    }

    return (
        <section className='mb-4 flex flex-col gap-12 lg:gap-40'>
            <ul className='flex flex-col  justify-center text-center border-y-2 px-5  mx-auto lg:flex-row max-w-xl lg:border-y-0 lg:border-b-2 lg:gap-20 lg:px-0'>
                <ll className="text-lg border-b-2 lg:border-b-0 ">
                    <p
                        onClick={() => onHandleFeature(1)}
                        className={`py-3 cursor-pointer   w-max mx-auto font-semibold  ${feature === 1 ? 'border-softRed text-veryDarkBlue border-b-4' : 'hover:text-softRed text-grayishBlue'}`}>Simple Bookmarking</p>
                </ll>
                <ll className="text-lg border-b-2 lg:border-b-0">
                    <p
                        onClick={() => onHandleFeature(2)}
                        className={`py-3 cursor-pointer w-max mx-auto font-semibold ${feature === 2 ? 'border-softRed text-veryDarkBlue border-b-4' : 'hover:text-softRed text-grayishBlue'}`}>Speedy Searching</p>
                </ll>
                <ll className="text-lg ">
                    <p
                        onClick={() => onHandleFeature(3)}
                        className={`py-3 cursor-pointer w-max mx-auto  font-semibold ${feature === 3 ? 'border-softRed text-veryDarkBlue border-b-4' : 'hover:text-softRed text-grayishBlue'}`}>Easy Sharing</p>
                </ll>
            </ul>

            <article className='flex flex-col gap-20 lg:flex-row lg:justify-around lg:items-center' >
                <div className="relative">
                    {
                        feature === 1
                        && <img className="relative z-20 w-80 mx-auto lg:w-[450px] xl:w-[550px]" src="/images/illustration-features-tab-1.svg" alt="illustration-hero" />
                    }
                    {
                        feature === 2
                        && <img className="relative z-20 w-80 mx-auto lg:w-[450px] xl:w-[550px]" src="/images/illustration-features-tab-2.svg" alt="illustration-hero" />
                    }
                    {
                        feature === 3
                        && <img className="relative z-20 w-80 mx-auto lg:w-[450px] xl:w-[550px]" src="/images/illustration-features-tab-3.svg" alt="illustration-hero" />
                    }

                    <div className="absolute -bottom-7 left-0 rounded-r-full z-10  h-48 w-72 bg-softBlue  lg:w-[400px] lg:h-[250px] lg:-bottom-28 lg:hidden"></div>
                </div>
                <div className='flex flex-col gap-4'>
                    {
                        feature === 1
                        && <p className='text-center text-veryDarkBlue font-semibold text-2xl lg: lg:text-left md:text-3xl '>Bookmark in one click</p>
                    }
                    {
                        feature === 2
                        && <p className='text-center text-veryDarkBlue font-semibold text-2xl lg: lg:text-left md:text-3xl '>Intelligent search</p>
                    }
                    {
                        feature === 3
                        && <p className='text-center text-veryDarkBlue font-semibold text-2xl lg: lg:text-left md:text-3xl '>Share your bookmarks</p>
                    }

                    {
                        feature === 1
                        && <p className="text-grayishBlue text-lg text-center max-w-lg mx-auto px-5 lg:text-left lg:px-0 ">
                            Organize your bookmarks however you like. Our simple drag-and-drop interface
                            gives you complete control over how you manage your favourite sites.
                        </p>
                    }
                    {
                        feature === 2
                        && <p className="text-grayishBlue text-lg text-center max-w-lg mx-auto px-5 lg:text-left lg:px-0 ">
                            Our powerful search feature will help you find saved sites in no time at all.
                            No need to trawl through all of your bookmarks.
                        </p>
                    }
                    {
                        feature === 3
                        && <p className="text-grayishBlue text-lg text-center max-w-lg mx-auto px-5 lg:text-left lg:px-0 ">
                            Easily share your bookmarks and collections with others. Create a shareable
                            link that you can send at the click of a button.
                        </p>
                    }

                    <button className='hidden px-5 py-3 rounded-md text-white bg-softBlue font-semibold w-max lg:block'>More Info</button>
                </div>
            </article>
        </section>
    )
}
