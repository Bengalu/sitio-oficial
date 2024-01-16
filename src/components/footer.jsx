import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



function Footer() {
    return (
        <footer className='footer'>
            <div>
                <Image src={"svg/footer.svg"} className='imgFooter' alt='logo' width={30} height={30}/>
                <p className='title'>BenGaLu</p>
                <p>© 2023 - www.Bengalu.com.ar</p>
            </div>

            <Link target='_blank' href={"https://www.linkedin.com/company/bengalu/"}><Image src={"svg/in.svg"} alt='linkedin' width={30} height={30}/></Link>
        </footer>
    )
}

export default Footer
