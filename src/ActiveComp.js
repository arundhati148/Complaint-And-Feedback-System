import React from 'react';
// import './App.css';
import './ActiveComp.css'
import { Table, ListGroup, ListGroupItem } from 'reactstrap';

function ActiveComp() {
    return (
        <div className="myright">
            <div className="container mt-3" style={{ overflow: 'scroll' }}>
                <h4>Active Complaints</h4>
                <Table size="sm" hover>
                    <tbody>
                        <th>Academic</th>
                        <tr>
                            <td>Issue with time table of IT 3rd year</td>
                        </tr>
                        <tr>
                            <td>Faculty not completing syllabus</td>
                        </tr>
                        <tr>
                            <td>Faculty not teaching properly</td>
                        </tr>
                        <tr>
                            <td>Lab timings not suitable</td>
                        </tr>
                        <a href='#' style={{float:'right'}}>view more...</a>
                    </tbody>
                   
                </Table>
                
                <Table size="sm" hover>
                    <tbody>
                        <th>Infrastructure</th>
                        <tr>
                            <td>System 112 in lab 111 not working.</td>
                        </tr>
                        <tr>
                            <td>Benches broken in Lt 302.</td>
                        </tr>
                        <tr>
                            <td>White board not visible and projector not working.</td>
                        </tr>
                        <tr>
                            <td>Tubelight not working in lt 202.</td>
                        </tr>
                        
                        <a href='#' style={{float:'right'}}>view more...</a>
                    </tbody>
                </Table>
                <Table size="sm" hover>
                    <tbody>
                        <th>Sanitation</th>
                        <tr>
                            <td>Stinking smell from lt 3rd floor washrooms.</td>
                        </tr>
                        <tr>
                            <td>Water coolers dont work.</td>
                        </tr>
                        <tr>
                            <td>Atc washroom are never clean.</td>
                        </tr>
                        <tr>
                            <td>Food left on classroom benches.</td>
                        </tr>
                        
                        <a href='#' style={{float:'right'}}>view more...</a>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default ActiveComp;