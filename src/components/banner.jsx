import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <section className='banner flex'>
            <div className='banner-content'>
                <h1>Soluciones <span>IT</span></h1>
                <h1>Grupo de Desarrolladores <br /><span>independientes</span></h1>
                <button>Contactanos</button>
            </div>
            <div className='flex imgBanner'>
                <Image src={"svg/imgsBanner.svg"} alt='banner' width={500} height={700}/>
            </div>
        </section>
    )
}

export default Banner
