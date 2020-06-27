import React from 'react';


function GetData() {
  function componentDidMount(){
    return fetch('drinks.csv').then((response) =>{
      console.log(response); 
      return response;
                                
    })
  }

  
  


  return(
    <p>data</p>
  )
}
export default GetData;


