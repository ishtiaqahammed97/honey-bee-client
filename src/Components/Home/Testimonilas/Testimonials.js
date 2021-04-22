import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
import adam from '../../../images/adam.jpg';
import mark from '../../../images/mark.jpg';
import harry from '../../../images/harry.jpg';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Adam jonson',
        from : 'California',
        img : adam
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Mark monson',
        from : 'California',
        img : mark
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'William harry',
        from : 'California',
        img : harry
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase text-center">Testimonial</h5>
                   <h1 className="text-center">What Our Customers <br/> Says </h1>
               </div>
               <div className="card-deck row mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;