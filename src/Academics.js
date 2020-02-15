import React from 'react';
import './App.css';

import { FormGroup,Label,Input,Col,Form,Button} from 'reactstrap';
function Academics() {
  return (
       <div className="container mt-4">

    <Form>
      <FormGroup row>
        <Label for="exampleSelect" sm={3}>Choose Category :</Label>
        <Col sm={9}>
        <Input type="select" bsSize="sm" name="select" id="exampleSelect" style={{width:'40vh'}}>
        <option selected disabled hidden>Select</option>
          <option>Course</option>
          <option>Time Table</option>
          <option>Faculty</option>
          <option>Other</option>
          </Input>
        </Col>

        <Label for="exampleYear" sm={3}>Select Year :</Label>
        <Col sm={9}>
        <Input type="select" bsSize="sm" name="select" id="exampleYear" style={{width:'40vh'}}>
        <option selected disabled hidden>Select</option>
          <option>First</option>
          <option>Second</option>
          <option>Third</option>
          <option>Fourth</option>
          </Input>
        </Col>

        <Label for="exampleCode" sm={3}>Course Code :</Label>
        <Col sm={9}>
            <Input type="text"  bsSize="sm" name="select" id="exampleYear" style={{width:'40vh'}}></Input>
        </Col>
        {/* for faculty */}
        <Label for="exampleCode" sm={3}>Faculty Name:</Label>
        <Col sm={9}>
            <Input type="text"  bsSize="sm" name="select" id="exampleYear" style={{width:'40vh'}}></Input>
        </Col>
           {/* for faculty */}
        
        
        <Label for="exampleDes" sm={3}>Description :</Label>
        <Col sm={9}>
            <Input type="textarea"  bsSize="sm" name="select" rows="8" id="exampleDes" style={{width:'80vh'}}></Input>
        </Col>
        
        <Label for="exampleDes" sm={3}></Label>
        <Col sm={9} className="mt-2">
        <Button color="secondary" >secondary</Button>
         </Col>
        
      </FormGroup>

          </Form>
        </div>
    );
}

export default Academics;