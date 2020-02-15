import React from 'react';
import './App.css';

import { FormGroup,Label,Input,Col,Form,Button} from 'reactstrap';
function Infra() {
  return (
    <div className="container mt-4">

    <Form>
      <FormGroup row>
        <Label for="exampleSelect" sm={3}>Choose Category :</Label>
        <Col sm={9}>
        <Input type="select" bsSize="sm" name="select" id="exampleSelect" style={{width:'40vh'}}>
        <option selected disabled hidden>Select</option>
          <option>Lab</option>
          <option>Projector</option>
          <option>Furniture</option>
          <option>Electricity</option>
          <option>Other</option>
          </Input>
        </Col>
        {/* for Lab */}
        <Label for="exampleYear" sm={3}>Select lab :</Label>
        <Col sm={9}>
        <Input type="select" bsSize="sm" name="select" id="exampleYear" style={{width:'40vh'}}>
        <option selected disabled hidden>Select</option>
          <option>Atc-101</option>
          <option>Atc-111</option>
          <option>Atc-201</option>
          <option>Atc-202</option>
          <option>Atc-203</option>
          <option>Atc-204</option>
          <option>Atc-205</option>
          <option>Atc-206</option>
          </Input>
        </Col>

        <Label for="exampleCode" sm={3}>System Number :</Label>
        <Col sm={9}>
            <Input type="text"  bsSize="sm" name="select" id="exampleYear" style={{width:'40vh'}}></Input>
        </Col>
       
        {/* for lab */}
       
        {/* for projector furniture and electricity */}
        <Label for="exampleCode" sm={3}>Classroom Number :</Label>
        <Col sm={9}>
            <Input type="text"  bsSize="sm" name="select" placeholder="Examle : Lt-702" id="exampleYear" style={{width:'40vh'}}></Input>
        </Col>
          {/* for projector furniture and electricity*/}

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

export default Infra;