import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer-white"
import "./Contact.css";

class Contact extends Component {
    
    render() {
        const style = {
            copyright: {
                color: 'white'
            }
        }
        return (
            <div className="full-homepage-background-contact">
            <Header />
            
        
        <div className="col-md-12 mx-auto vertical-center contact-text">
            <p className="text-center w-50"><span className='contact-margin'>Tarek Shayne Tabet</span>
            <span className='contact-margin'>tarek.shaynetabet@gmx.de</span>
            <span className='contact-margin'>+49 1522 9078624</span>
</p>
<p className="text-center w-100">
<span className='contact-margin'>Imran Shayne Tabet</span>
<span className='contact-margin'>i.shayne.tabet@gmail.com</span>
<span className='contact-margin'>+49 177 4802110</span></p>
            
        </div>
        <Footer style={style} />
        
           
        </div>
        );
    }
}

export default Contact ;