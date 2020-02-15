import React from 'react';
import './App.css';

import { FormGroup,Label,Input,Col,Form,Button} from 'reactstrap';
function Sanitation() {
  return (
       <div className="container mt-4">

    <Form>
      <FormGroup row>
       

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

        <Label for="exampleCode" sm={3}>Building :</Label>
        <Col sm={9}>
            <Input type="text"  bsSize="sm" name="select" placeholder="Enter name and floor no." id="exampleYear" style={{width:'40vh'}}></Input>
        </Col>
       
        
        
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

export default Sanitation;