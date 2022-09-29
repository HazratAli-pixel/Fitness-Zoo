import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);
    // return (
    //     <div>
    //         <h1 className='text-start'>{cart._id}</h1>
    //     </div>
    // );
    const {_id, title, description,time,imgUrl, age} = cart;
    return (
        <div className='col-4 pb-2 p-2' >
            <div className="card h-100 position-relative" data-aos="fade-up" data-aos-duration="3000">
                <div className='p-2'>
                    <img src={imgUrl} className="card-img-top rounded-3" onError={(e)=>{e.currentTarget.src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/856e874762eb48da8e22acda00efaeb4_9366/Tiro_Track_Pants_Black_GN5490_21_model.jpg'}} alt=""></img>
                </div>
                <div className="p-2 mb-5">
                    <h4 className='m-0 pb-3 text-start fw-bolder'>{title}</h4>
                    <p className='m-0 text-start text-muted'>{description.slice(0,100)}...</p>
                    <p className='m-0 text-start'><small>For age: {age}</small></p>
                    <p className='m-0 text-start'>Time Required: {time} s</p>
                </div>
                <div className='position-absolute bottom-0 p-2 col-12'>
                    <button className='btn btn-primary form-control'> Add to List
                        <FontAwesomeIcon className='ps-2' icon={faArrowAltCircleRight}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;