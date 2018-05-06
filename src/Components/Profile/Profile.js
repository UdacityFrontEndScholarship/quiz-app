import React, { Component } from 'react';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css';
class Profile extends Component {
    render(){
        console.log(this.props); //this is the data you'll be working with head over to console to see the data. 
        //add your code here
        return (<div>This is profile </div>);
    }
}


const mapStateToProps = (state) => (
    { auth: state.auth }
);
export default connect(mapStateToProps)(Profile);