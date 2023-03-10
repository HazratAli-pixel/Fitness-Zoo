import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-light ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="fs-3 fw-bolder navbar-brand" href="fas">  <img src="gym_icon.png" style={{width:'50px'}} className='rounded-circle ps-1'  alt="" /> Fitness Zoo</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>    
        </div>
    );
};

export default Header;