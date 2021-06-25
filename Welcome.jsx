import React, { Component } from 'react';
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'




class Welcome extends Component{
 
  
  constructor(){

    super();
   
    this.state= {

      myData : []
    }
  }


    componentDidMount(){

      axios('https://restcountries.eu/rest/v2/all')

      .then(response => {

       this.setState({myData:response.data});
      })
      .catch(error =>{

        console.log(error);
      })



      
    }

  render() {
 
    const myList =this.state.myData

    const countryName = myList.map((myList)=>{

       return <li>{myList.name}</li>
    })
 
    return (
      <div>
          <ul>{countryName}</ul>

      </div>
    )
  }
}
export default Welcome;


