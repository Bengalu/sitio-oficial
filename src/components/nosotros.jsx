import React from 'react'
import Image from 'next/image'

function Nosotros() {
    return (
        <section className='nosotros'>
            <div className='nosotros-content flex'>
                <h1>Nosotros</h1>
            </div>
            <div className='nosotros-about flex'>
                <Image src={"svg/group.svg"} width={300} height={300}/>
                <div>
                    <p>Bienvenido a <span>Bengalu:</span> Transformando Ideas en Realidad.</p>
                    <div className='flex'>
                        <p className='textBengalu'>En <span>Bengalu</span>, nos dedicamos apasionadamente a convertir visiones en 
                            innovadoras soluciones digitales. Somos un equipo de desarrolladores, 
                            unidos por nuestra pasión compartida por la tecnología
                            y el deseo de marcar la diferencia en el mundo digital.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros
