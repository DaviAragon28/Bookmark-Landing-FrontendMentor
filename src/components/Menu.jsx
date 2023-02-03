import React, { useEffect } from 'react'
import { isMenuOpen } from './cartMenu';
import { useStore } from '@nanostores/react';

export const Menu = () => {
    const $isMenuOpen = useStore(isMenuOpen);

    const onHandleMenu = () => {
        isMenuOpen.set(false)
    }

    useEffect(() => {

        const mediaqueryList = window.matchMedia("(min-width: 1023px)");
        
        mediaqueryList.addEventListener('change', (EventoMediaQueryList) => {
            if (EventoMediaQueryList.matches) {
                onHandleMenu()
            }
        });
    }, [])



    return (
        <div className={`lg:hidden  fixed h-screen bg-veryDarkBlue/90 bottom-0 z-40 pt-32 pb-10 px-10  text-white top-0 ${!$isMenuOpen ? 'left-[100%]' : 'left-0 right-0 '} `}>
            <nav className='flex flex-col justify-between h-full'>
                <ul className='flex text-center flex-col items-center gap-2 font-semibold'>
                    <li onClick={onHandleMenu} className='border-y w-full py-3 border-grayishBlue hover:text-softRed'>
                        <a href="#features">FEATURES</a>
                    </li>
                    <li className='border-b w-full py-3 border-grayishBlue hover:text-softRed'>PRICING</li>
                    <li onClick={onHandleMenu} className='border-b w-full py-3 border-grayishBlue hover:text-softRed'>
                        <a href="#contact">CONTACT</a>
                    </li>
                    <li className='border-2 mt-2 rounded-md w-full py-3 hover:border-softRed hover:text-softRed'>LOGIN</li>

                </ul>
                <ul className='flex  justify-center gap-6 items-center'>
                    <li className="cursor-pointer">
                        <img src="/images/icon-facebook.svg" alt="icon-faceebok" />
                    </li>
                    <li className="cursor-pointer">
                        <img src="/images/icon-twitter.svg" alt="icon-twitter" />
                    </li>
                </ul>
            </nav>
        </div>
    )
}


