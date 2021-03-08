import "./App.css";
import 'leaflet/dist/leaflet.css';
import firebase from "./Firebase";
import React, { Component} from "react";
import Map from "./Map";

class App extends Component{
  constructor(){
    super();
    this.app =  firebase;
    this.database = this.app.database().ref().child('position');
    this.state = {
      lat: 24.857518,
      lng: 67.032169
    };
  }

  componentDidMount(){
    this.database.on('value', (snapshot) =>{
      let data = snapshot.val();
      this.setState({
        lat: data.lat,
        lng: data.lng
      });
    });
  }
  render(){
    return (
      <div >
        <Map lat={this.state.lat} lng={this.state.lng}/>
      </div>
    );
  }
}



export default App;
