import React, { Component } from 'react';
import Header from "./Header"
import Footer from "./Footer-white"
import "./Contact.css";

class Contact extends Component {
    state = {  }
    render() {
        return (
            <div className="full-homepage-background-contact">
            <Header />
            <Footer />
        </div>
        );
    }
}

export default Contact ;