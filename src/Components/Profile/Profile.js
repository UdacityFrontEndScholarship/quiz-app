import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Doughnut} from 'react-chartjs-2';
import {Chart} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.css';
import './Profile.css';


var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);
    
    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 150).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 1.98;

    ctx.fillText(text, textX, textY);
  }
});

const data = {
	labels: [
		'Complete',
		'Incomplete',
		
	],
	datasets: [{
        data: [300, 523],
        
		backgroundColor: [
        '#1ab4e9',
		'#afafaf'
		],
		hoverBackgroundColor: [
        '#1ab4e9',
        '#afafaf'
		]
    }],
    text: '23%'
};

class Profile extends Component {
    render(){
        console.log(this.props); //this is the data you'll be working with head over to console to see the data. 
        //add your code here
        return (<div className="profile_container">
            
            <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                <img className="user_profile" src="https://media.creativemornings.com/uploads/user/avatar/89900/Profile_picture_square.jpg" />
                <label className="user_full_name">User Full name</label>
                <strong className="user_public_name">username</strong>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-9 col-lg-10">
                    <div className="row">
                        <div className="col-xs-12 col-md-12 col-lg-12">
                            <label className="user_stats">
                            Total Members <strong>40</strong>
                            </label>
                            <label className="user_stats">
                            Total Members <strong>40</strong>
                            </label>
                            <label className="user_stats">
                            Total Members <strong>40</strong>
                            </label>
                        </div>
                    </div>
                    <div className="row profile_background">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <Doughnut 
                                width={240}
                                height={200} 
                                data={data} 
                                options={{
                                cutoutPercentage:78,
                                legend: {
                                    display: false,}
                                }}  
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <Doughnut 
                                width={240}
                                height={200} 
                                data={data} 
                                options={{
                                cutoutPercentage:78,
                                legend: {
                                    display: false,}
                                }}  
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                            <Doughnut 
                                width={240}
                                height={200} 
                                data={data} 
                                options={{
                                cutoutPercentage:78,
                                legend: {
                                    display: false,}
                                }}  
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"></div>
                    </div>
                </div>
            </div>


           
           
            
            
            </div>);
    }
}


const mapStateToProps = (state) => (
    { auth: state.auth }
);
export default connect(mapStateToProps)(Profile);