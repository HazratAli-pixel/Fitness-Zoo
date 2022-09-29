import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="mt-5 bg-dark" >
        <section className="container">
          <div className="col-12 h-100 text-white p-5 mt-3">
            <div className=" text-center">
              <h1 style={{fontFamily: 'Dela Gothic One'}}>Fitness Zoo</h1>
              <p className="m-1">Address : 13/5, Solimullah Road, Mohammadpur, Dhaka</p>
              <p>Privacy Policy | Terms of use</p>
            </div>
          </div>
        </section>
      </footer>
    );
};

export default Footer;