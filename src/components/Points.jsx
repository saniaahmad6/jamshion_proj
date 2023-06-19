import React from 'react';
import { MDBCard, MDBCardBody,  MDBRow, MDBCol} from 'mdb-react-ui-kit';
import "./Points.css"
export default function Points() {
    const styles ={
        bg : {
            backgroundColor: "#FDE3D8",
            border : "0px"
        },
        bg2 : {
            backgroundColor : "#C4DFDF",
            border : "0px"
        }
    }
  return (
    <>


 
    <MDBRow style={{padding :"2% 1% 0",fontSize :"1.5rem", fontFamily :"Outfit" ,color :"#22423D" }}>
      <MDBCol md='3'>
      <MDBCard className='shadow p-3 mb-5  rounded' style ={styles.bg}>
        <MDBCardBody >98% Customer Satisfaction</MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol md='3' >
      <MDBCard className='shadow p-3 mb-5 bg-white rounded'>
        <MDBCardBody>75% Repeat Sales</MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol md='3'>
      <MDBCard className='shadow p-3 mb-5  rounded' style={styles.bg2}>
        <MDBCardBody>1500+ Orders fulfilled</MDBCardBody>
      </MDBCard>
      </MDBCol>
      <MDBCol md='3'>
      <MDBCard className='shadow p-3 mb-5 bg-white rounded'>
        <MDBCardBody>114 Districts Served</MDBCardBody>
      </MDBCard>
      </MDBCol>
    </MDBRow>
 
    
    </>
  );
}