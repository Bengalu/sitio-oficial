import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Banner() {
    return (
        <section className='banner'>
            <div className='banner-content'>
                <h1 className='soluciones'>Soluciones IT <br /> <span className='grupo'>Grupo de Desarrolladores </span><br /><span className='indep'>independientes</span></h1>
                <Link href={"#contact"}><button>Contactanos</button></Link>
            </div>
        </section>
    )
}

export default Banner
