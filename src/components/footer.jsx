import React from 'react'
import Image from 'next/image'


function Footer() {
    return (
        <footer className='footer'>
            <div>
                <Image src={"svg/footer.svg"} className='imgFooter' alt='logo' width={30} height={30}/>
                <p className='title'>BenGalu</p>
                <p>© 2023 - www.Bengalu.com.ar</p>
            </div>

            <Image src={"svg/in.svg"} alt='linkedin' width={30} height={30}/>
        </footer>
    )
}

export default Footer
