import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();

    // const onSubmit = data => {
    //     const loading = toast.loading('Please wait...!');
    //     emailjs.sendForm('service_wj9htil', 'template_1sdie1f', data, 'user_WNGJRkMELIubNu2ljQDyX')
    //         .then((res) => {
    //             toast.dismiss(loading);
    //             if (res.text === "OK") {
    //                 reset();
    //                 return swal("Thank you!", "Your message was sent successfully.", "success");
    //             } else {
    //                 swal("Sorry!", "Something went wrong. Please try again later", "error")
    //             }
    //         }, (err) => {
    //             toast.dismiss(loading);
    //             swal("Sorry!", "Something went wrong. Please try again later", "error")
    //         });
    // };

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_wj9htil', 'template_1sdie1f', e.target, 'user_WNGJRkMELIubNu2ljQDyX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }


    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" {...register("name", { required: true })} required className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" {...register("email", { required: true })} required className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group">
                            <input type="text"{...register("subject", { required: true })} required className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group">
                            <textarea {...register("name", { required: true })} required name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn-main"> Send Message </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;