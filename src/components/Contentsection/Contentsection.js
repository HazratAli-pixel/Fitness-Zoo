import React, { useEffect, useState } from 'react';

const Contentsection = () => {
    const [info, setinfo] = useState([])

    useEffect(()=>{
        fetch('fakedata.JSON')
        .then(res =>res.json())
        .then(data => setinfo(data));
    },[])

    console.log(info);
    return(
        <div className='shop-container container'>
            <div className='row d-flex p-2'>
                <div className="products-container col-9 d-flex flex-wrap">
                
                </div>
                <div className="col-3 order rounded-2">
                    
                </div>
            </div>
        </div>
    )
};

export default Contentsection;