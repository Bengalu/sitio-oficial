import React from 'react'
import Image from 'next/image'


function Footer() {
    return (
        <footer>
            logo

            <h1>BenGalu</h1>
            <p>© 2023 - www.Bengalu.com.ar</p>
            <Image src={"../../public/svg/in.svg"} alt='linkedin' width={50} height={50}/>
        </footer>
    )
}

export default Footer
