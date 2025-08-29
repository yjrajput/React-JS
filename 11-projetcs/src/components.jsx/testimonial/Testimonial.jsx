import React, { useState } from 'react'

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonial = [
        {
            quate: "This is the best product i've seen",
            author: 'Jhon due',
        },
        {
            quate: "I highley recommended to this product",
            author: 'lana rey',
        },
        {
            quate: "How this can be good product",
            author: 'Henry',
        },
        {
            quate: "This is the best one",
            author: 'Ben',
        },
    ];

    const handleOnPrev = () =>{
        setCurrentIndex((currentIndex + testimonial.length -1) % testimonial.length) 
    }
    const HandleOnNext = () =>{
        setCurrentIndex((currentIndex + 1) % testimonial.length)
    }
  return (
    <div className='container'>
        <section className='content'>
            <h1>{testimonial[currentIndex].quate}</h1>
            <p>-{testimonial[currentIndex].author}</p>

            <div>
                <button className='btn' onClick={handleOnPrev}>Pre</button>
                <button className='btn' onClick={HandleOnNext}>Next</button>
            </div>
        </section>
    </div>
  )
}

export default Testimonial
