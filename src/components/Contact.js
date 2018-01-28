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
            <p className="text-center w-50">Tarek Shayne Tabet
tarek.shaynetabet@gmx.de
+49 1522 9078624 
Imran Shayne Tabet
i.shayne.tabet@gmail.com
+49 177 4802110</p>
            
        </div>
        <Footer style={style} />
        
           
        </div>
        );
    }
}

export default Contact ;