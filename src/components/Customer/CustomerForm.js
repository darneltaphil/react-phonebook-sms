import React from "react"
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Swal from 'sweetalert2'
let baseUrl = "http://localhost:4000/api/customers/"
const CustomerForm = () => {
  // const [show, setShow] = useState(false);
  // const handleCustomerModalClose = () => setShow(false);
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      name : e.target[0].value,
      mobile : e.target[1].value,
      email : e.target[2].value,
      address : e.target[3].value,
      city : e.target[4].value,
      gps : e.target[5].value,
      creator: "5fa189e32516a81f48488d0f"
    }

    try{
        fetch(baseUrl, {
        method: "POST",
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then( response =>{
        if(response.status){
           Swal.fire({
            type: "success",
            timer: 2000,
            text: "Contact Saved"})

           
        }
    })
      }catch(error){

      }
  }

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <center> <div className="round-50 flex">
          <Container>
            <Row>
                <Col xs={12} md={12}>
                <Image src="https://via.placeholder.com/60" roundedCircle  />
                </Col>
            </Row>
            </Container>                 
            </div>
            </center>
          </div>
        </div>
        <hr className="sidebar-divider mb-5"/> 

        <div className="form-row">
          <div className="form-group col-md-12">
            {/* <label for="inputName">Name</label> */}
            <input name="name" type="text" className="form-control" id="inputName" placeholder="Name" required/>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-12">
            {/* <label for="inputMobile">Mobile</label> */}
            <input name="mobile" type="number" step="1" className="form-control" id="inputMobile" placeholder="Mobile" required/>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group col-md-12">
            {/* <label for="inputEmail">Email</label> */}
            <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Email"/>
          </div>
        </div>
        
        <div className="form-group">
          {/* <label for="inputAddress">Address</label> */}
          <input name="address" type="text" className="form-control" id="inputAddress" placeholder="Address: Street name, Area Name, House n*" />
        </div>
        
        <div className="form-row">
          <div className="form-group col-md-6">
            {/* <label for="inputCity">City</label> */}
            <input name="city" type="text" className="form-control" id="inputCity" placeholder="City"/>
          </div>
        
          <div className="form-group col-md-6">
            {/* <label for="inputGPS">GhanaPost GPS</label> */}
            <input name="gps" type="text" className="form-control" id="inputGPS" placeholder="GhanaPost GPS"/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      )
}
export default CustomerForm