import React, { useEffect } from 'react';
import testiData from '../../../Data/Testimonial';
import Heading from '../../Common/Headings/Heading';
import "./Testimonials.css";


function Testimonials() {

    useEffect(() => {

        new Swiper('.testimonials-slider', {
            speed: 1800,
            
            spaceBetween:30,
            
            loop: true,
            
            effect: 'coverflow',

            coverflowEffect: {
                rotate: 30,
                slideShadows: false,
            },

            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },
            
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },

            breakpoints: {
                250: {
                    slidesPerView: 1,
                },
                350: {
                    slidesPerView: 1,
                },
                468: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 1,
                },
                556: {
                    slidesPerView: 2,
                },
                567: {
                    slidesPerView: 2,
                },
                991: {
                    slidesPerView: 3,
                },

                1199: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });

    })

    return (

        <>

            <section id="testimonials" className="testimonials section-bg container" >

                <div className="container">

                    <Heading id="heading_testimonials" title="TESTIMONIALS" />

                    {/* <!-- Like row  --> */}

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">

                        {/* <!-- like col --> */}

                        <div className="swiper-wrapper Testimonial_swiper_Rappers">

                            {/* <!-- testi Start --> */}

                            {testiData.map((element) => {

                                return <div key={element.id} className="swiper-slide col-container">

                                    <div className="testimonial-item col">

                                        <div className="d-flex" id="firstRow">

                                            <img
                                                src={element.imgSrc}
                                                className="testimonial-img" alt={element.name} />

                                            <h3>{element.name}</h3>

                                        </div>

                                        

                                        <p className={(element.content).includes("gracious") ? 'spacing' : ''}>

                                            {/* <i className="fa-solid fa-quote-left"></i> */}
                                            {element.content}
                                            {/* <i className="fa-solid fa-quote-right"></i> */}

                                        </p>

                                        <hr />

                                        <h4>{element.profession}</h4>



                                    </div>

                                </div>

                            })}

                            {/* <!-- testi End --> */}


                        </div>

                        <div className="swiper-pagination"></div>

                    </div>


                </div>


            </section>

        </>

    )
}

export default Testimonials