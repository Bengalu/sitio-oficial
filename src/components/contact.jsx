'use client'
import { useState } from 'react'
import React from 'react'
import { useForm } from 'react-hook-form'
const axios = require('axios');

function Contact() {
    const [submit, setSubmit] = useState(false);

    const {register, handleSubmit, 
        formState: {errors}, reset
    } = useForm();

    const onSubmit = handleSubmit(async (data) => {

        axios.post("/api/send", {
            email: data.email,
            subject: data.subject,
            messageText: data.messageText
        })

        setSubmit(true);
        setTimeout(() => {setSubmit(false)}, 3000);
        document.getElementById("send").classList.add("success");
        document.getElementById("email").value = ""
        document.getElementById("subject").value = ""
        document.getElementById("message").value = ""
    })


    return (
        <section className='contact'>
            <div className='contact-head'>
                <h1>Contactanos</h1>
            </div>
            <div className='contact-about'>
                <div className='contact-rotate'>
                    <h3>¡Hagamos Realidad tu Próximo Proyecto Digital!</h3>
                </div>

                <p>En <span>Bengalu</span>, estamos listos para convertir tus ideas en acción. Si tienes un proyecto emocionante
                    en mente o simplemente deseas discutir las posibilidades, ¡nos encantaría escucharte!
                    Completa el formulario a continuación y déjanos saber cómo podemos ayudarte
                    a alcanzar tus metas digitales. Estamos aquí para convertir tus sueños en realidad.</p>

                <div className='form-content'>
                    <form className='form' onSubmit={onSubmit}>
                        <div>
                            {submit && <h3 className='submit-message'>Enviado!</h3>}
                            <label htmlFor='email' >Email :</label>
                            <input type='email' id='email' {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                    message: "Email is invalid"
                                }
                            })}></input>
                            {errors.email && <span className='error'>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label htmlFor='subject'>Asunto :</label>
                            <input type='text' id='subject' {...register("subject", {
                                required: true
                            })}></input>
                            {errors.subject && <span className='error'>Subject is required</span>}
                        </div>
                        <div>
                            <label htmlFor='messageText'>Mensaje :</label>
                            <textarea id='message' className='input-text' {...register("messageText", {
                                required: true
                            })}>
                            </textarea>
                            {errors.messageText && <span className='error'>message is required</span>}
                        </div>
                        
                        <div className='btn'>
                            <button type='submit' id='send'>Enviar</button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
