import Image from 'next/image'
import React from 'react'


function Elegirnos() {
    return (
        <section className='elegirnos'>
            <div className='elegirnos-content flex'>
                <h1>¿Por Que Elegirnos?</h1>
            </div>
            <div className='elegirnos-about flex'>
                
                <Image src={"svg/group.svg"} className='img-elegirnos' width={0} height={0}/>

                <div className='elegirnos-team'>
                    <p>
                        En <span>Bengalu</span> trabajamos codo a codo contigo para entender tus metas y desafíos, 
                        creando soluciones personalizadas que impulsen tu éxito.
                    </p>
                    <p>Ademas, estamos inmersos en las últimas tendencias tecnológicas. Utilizamos herramientas y enfoques de 
                        desarrollo de última generación para garantizar soluciones robustas y sostenibles.
                    </p>
                    <p>
                        En <span>Bengalu</span>, no solo creamos software; construimos asociaciones duraderas. Únete a nosotros en esta emocionante 
                        travesía digital, donde cada línea de código cuenta una historia 
                        de innovación y éxito.
                    </p>
                    <p><span>¡Bienvenido a Bengalu, donde tus ideas se convierten en realidad!</span></p>
                </div>
            </div>
        </section>
    )
}

export default Elegirnos
