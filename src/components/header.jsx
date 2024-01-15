import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <header className='flex'>
            <div className='flex title'>
                <Image src={"svg/bengalu.svg"} alt='logo' width={30} height={30}/>
                <h2>BenGaLu</h2>
            </div>
            <div>
                <ul className='flex list'>
                    <li className='pointer'><h4 ><Link href={"/about"}>Quienes Somos</Link></h4></li>
                    <li><a href="#"><h4>|</h4></a></li>
                    <li className='pointer'><a href=""><h4 className='pointer'>Contactanos</h4></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header
