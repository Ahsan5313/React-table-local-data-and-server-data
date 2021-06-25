import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 



 class Hello extends Component {


    constructor(){

        super();
        this.state={

            tableInformation : []
        }
    }


    componentDidMount(){

        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response =>{

            this.setState({tableInformation :response.data})
        })
        .catch(error =>{

            console.log('something went wrong');
        })
     
    }


    render() {

        const tableData =this.state.tableInformation
       
        const col = [{Header: 'Country Name', accessor: 'name'},{Header: 'Capital', accessor: 'capital'},{Header: 'region', accessor: 'region'},{Header: 'Population', accessor: 'population'}]

        return (
            <div>

                <ReactTable
                  
                  data = {tableData}
                  columns = {col}
                  defaultPageSize = {10}
                  pageSizeOptions = {[2,4,6,8,10,12,14,20,24,26,29,35,45,55,66,77]}

                
                
                />
                
            </div>
        )
    }
}
export default Hello;