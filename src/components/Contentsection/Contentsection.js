import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Contentsection.css';

const Contentsection = () => {
    const [info, setinfo] = useState([])
    const [time, setTime] = useState(0)

    useEffect(()=>{
        fetch('fakedata.JSON')
        .then(res =>res.json())
        .then(data => setinfo(data));
    },[])

    const handleClick = (cart) =>{
        setTime(current=>+current+cart.time)
        localStorage.setItem("ExerciseTime",time);
    }
    useEffect(()=>{
        const getExercisetime = localStorage.getItem("ExerciseTime")
        if(getExercisetime){
            setTime(getExercisetime)
        }
    },[])

    return(
        <div className='shop-container container'>
            <div className='row d-flex p-2'>
                <div className="products-container col-9 d-flex flex-wrap bg-light rounded-3">
                <h3 style={{fontFamily: 'Dela Gothic One'}} className='fw-bolder text-start w-100 p-2 pt-4'>Select Todays Activitis</h3>
                    {
                        info.map((cart_data)=> <Cart handleClick={handleClick} key={cart_data._id} cart={cart_data}></Cart>)
                    } 
                </div>
                <div className="col-3 rounded-2 position-relative">
                    <Profile time={time}></Profile>
                </div>
            </div>
        </div>
    )
};

export default Contentsection;
