import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './Profile.css';

const Profile = ({time}) => {
    const [breaktime, setBreaktime]= useState(0)
    const notify = () => {
        Swal.fire(
        'Good job! Mr. Hazrat Ali',
            'You complited the work!',
            'success'
            )
    };
    const handleBreak = (e)=>{
        let value = e.target.value;
        localStorage.setItem("BreakTime",value);
        const getBreaktime = localStorage.getItem("BreakTime")
        if(getBreaktime){
            // setBreaktime(getBreaktime)
        }
        setBreaktime(value)

    }
    useEffect(()=>{
        
    },[breaktime])



    return (
        <div className=' order p-2 stickyy'>
            <div className='d-flex py-3'>
                <div>
                    <img src="alill.jpg" style={{width:'50px'}} className='rounded-circle ps-1'  alt="" />
                </div>
                <div className='ps-3'>
                    <h5 className='p-0 m-0 text-start'>Mr. Hazrat Ali</h5>
                    <p className='p-0 m-0'><FontAwesomeIcon icon={faLocation}/> Mohammdpur, Dhaka</p>
                </div>
            </div>
            <div className='com_color2 rounded-3 d-flex justify-content-around p-2'>
                <div className='d-flex flex-column p-0 m-0 '>
                    <div className='d-flex'>
                        <h5 className='p-0 m-0'>70</h5>
                        <p className='p-0 m-0'>kg</p>
                    </div>
                    <p className='p-0 m-0 fw-bold'>weight</p>
                </div>
                <div className='d-flex flex-column p-0 m-0'>
                    <div className=''>
                        <h5 className='p-0 m-0'>5.8"</h5>
                    </div>
                    <p className='p-0 m-0 fw-bold'>Height</p>
                </div>
                <div className='d-flex flex-column p-0 m-0'>
                    <div className='d-flex'>
                        <h5 className='p-0 m-0'>25</h5>
                        <p className='p-0 m-0'>yr</p>
                    </div>
                    <p className='p-0 m-0 fw-bold'>Age</p>
                </div>
                
            </div>
            <h5 className='text-start pt-4 pb-2 fw-bold'>Add a Break</h5>
            <div className='com_color2 rounded-3 d-flex justify-content-around p-3 mt-2'>
                    <div><button className="btn rounded-circle bg-white p-2" value="10" onClick={(e)=>handleBreak(e)}>10s</button></div>
                    <div><button className="btn rounded-circle bg-white p-2" value="20" onClick={(e)=>handleBreak(e)}>20s</button></div>
                    <div><button className="btn rounded-circle bg-white p-2" value="30" onClick={(e)=>handleBreak(e)}>30s</button></div>
                    <div><button className="btn rounded-circle bg-white p-2" value="40" onClick={(e)=>handleBreak(e)}>40s</button></div>
                    <div><button className="btn rounded-circle bg-white p-2" value="50" onClick={(e)=>handleBreak(e)}>50s</button></div>
            </div>
            <h5 className='text-start pt-4 pb-2 fw-bold'>Exercise Details</h5>
            <div className='com_color2 rounded-3 p-3 mt-2'>
                <div className='d-flex justify-content-between'>
                    <p className='m-0'>Exercise Time</p>
                    <p className='m-0'>{time} seconds</p>
                </div>
            </div>
            <div className='com_color2 rounded-3 p-3 mt-2'>
                <div className='d-flex justify-content-between'>
                    <p className='m-0'>Break Time</p>
                    <p className='m-0'>{breaktime} second</p>
                </div>
            </div>
            <div className='pt-5'><button className="btn btn-primary w-100" onClick={notify} >Activity Complited </button></div>
        </div>
    );
};

export default Profile;