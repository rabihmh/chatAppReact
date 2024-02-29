import React from 'react';
import { Row,Col } from 'react-bootstrap';
import MessageContainer from './MessageContainer';
import SendMessageForm from './SendMessageForm';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
} from "mdb-react-ui-kit";
const ChatRoom = ({messages,sendMessage}) => {
    return (
        <MDBContainer className="py-5">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol md="8" lg="6" xl="4">
              <MDBCard id="chat1" style={{ borderRadius: "15px" }}>
                <MDBCardHeader
                  className="d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                >
                  <MDBIcon fas icon="angle-left" />
                  <p className="mb-0 fw-bold">Live chat</p>
                  <MDBIcon fas icon="times" />
                </MDBCardHeader>
    
                <MDBCardBody>
                  <MessageContainer messages={messages}/>
                  <SendMessageForm sendMessage={sendMessage}/>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
}
export default ChatRoom;


/*
 return (
        <div>
           <Row className="px-5 py-5">
                <Col sm={10}>
                    <h2>ChatRoom</h2>
                </Col>
                <Col sm={2}>
                    <button className="btn btn-danger">Leave</button>
                </Col>
           </Row>
            <Row className="px-5 py-5">
                 <Col sm={12}>
                     <MessageContainer messages={messages}/>
                 </Col>
                 <Col sm={12}>
                     <SendMessageForm sendMessage={sendMessage}/>
                 </Col>
            </Row>
        </div>
    );
*/