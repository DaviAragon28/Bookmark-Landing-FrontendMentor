import React, { useState } from 'react'
import { isMenuOpen } from './cartMenu';
import { useStore } from '@nanostores/react';
// import{ Menu } from '../components/Menu.jsx'

export const Header = () => {
    const $isMenuOpen = useStore(isMenuOpen);
    const onHandleOpenMenu = () => {
        isMenuOpen.set(!$isMenuOpen)
    }

    return (
        <header className={`${$isMenuOpen ? 'fixed z-50 left-0 right-0 top-0' : 'relative'}`}>
            <nav className='lg:mx-20 xl:mx-24'>
                <ul className='flex ittems-center justify-between px-4 pb-4 pt-10 lg:px-0'>
                    <li>
                        {
                            $isMenuOpen
                                ? <img src="/images/logo-bookmark-footer.svg" alt="logo" />                        
                                : <img src="/images/logo-bookmark.svg" alt="logo" />
                        }
                    </li>
                    <li onClick={onHandleOpenMenu} className='lg:hidden z-30 relative'>
                        {
                            $isMenuOpen
                                ? <img src="/images/icon-close.svg" alt="icon-close" />
                                : <img src="/images/icon-hamburger.svg" alt="icon-hamburger" />
                        }
                    </li>
                    <div className='hidden lg:flex gap-9 items-center font-normal'>
                        <li className='text-veryDarkBlue lg:text-sm cursor-pointer hover:text-softRed'>
                            <a href="#features">FEATURES</a>
                        </li>
                        <li className='text-veryDarkBlue lg:text-sm cursor-pointer hover:text-softRed'>

                            <a href="#pricing">PRICING</a>
                        </li>
                        <li className='text-veryDarkBlue lg:text-sm cursor-pointer hover:text-softRed'>
                            <a href="#contact">CONTACT</a>
                        </li>
                        <li className='text-white lg:text-sm bg-softRed px-10 py-2 rounded-md border-2 border-softRed hover:bg-white hover:text-softRed transition-colors cursor-pointer'>LOGIN</li>
                    </div>
                </ul>
            </nav>
        </header >
    )
}
