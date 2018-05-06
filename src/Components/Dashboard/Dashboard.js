import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';

import './Dashboard.css';

class Dashboard extends Component {
    render(){
        return (<div>
                    <Header />
                    <Profile />
                    <Footer />
                </div>
        )
    }
}

export default Dashboard;