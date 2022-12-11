import React from 'react';
import { FaMapMarkerAlt,FaRegEnvelope,FaPhone } from "react-icons/fa";


const ContactMe = () => {
    return (
        <div>
            <div className='mr-4'>
           <h1 className='text-2xl uppercase'>Get in Touch</h1> 
           <hr className='border-2'/>
           </div>
           <div className='grid grid-cols-3 text-center mt-6 gap-3'>
            <div className='border py-10'>
                <FaMapMarkerAlt className='w-full mb-2'></FaMapMarkerAlt>
                <p>134.No Bongshal, Dhaka-1100</p>
            </div>
            <div className='border  py-10'>
                <FaRegEnvelope className='w-full mb-2'></FaRegEnvelope>
                <p>arefinismile@gmail.com</p>
            </div>
            <div className='border py-10'>
                <FaPhone className='w-full mb-2'></FaPhone>
                <p>0130-3105521</p>
            </div>
           </div>
           <form>
           <input type="text" placeholder="Type here" className="input input-bordered w-full my-2" />
           <input type="text" placeholder="Type here" className="input input-bordered w-full mb-2" />
           <textarea className="textarea textarea-bordered w-full h-32" placeholder="Bio"></textarea>
           <button className='btn px-6'>Send Message</button>
           </form>
        </div>
    );
};

export default ContactMe;