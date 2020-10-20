
import React from "react"
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
const CustomerForm = () => {
    return (<form>
        <div className="form-row">
          <div className="form-group col-md-12">
            <center> <div className="round-50 flex">
          <Container>
            <Row>
                <Col xs={12} md={12}>
                <Image src="https://via.placeholder.com/100" roundedCircle  />
                </Col>
            </Row>
            </Container>                 
            </div></center>
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
            <input name="" type="email" className="form-control" id="inputEmail" placeholder="Email"/>
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
            <input name="ghanapostgps" type="text" className="form-control" id="inputGPS" placeholder="GhanaPost GPS"/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      )
}
export default CustomerForm