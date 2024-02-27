import React, { useState } from 'react';
import { Form, Button,Row,Col } from 'react-bootstrap';
const Waitingroom = ({joinChatRoom}) => {
    const [username, setUsername] = useState();
    const [chatroom, setChatroom] = useState();
    return <Form onSubmit={(e) => {
        e.preventDefault();
        joinChatRoom(username, chatroom);
    }}>
        <Row className="px-5 my-5">
            <Col sm='12'>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Chatroom</Form.Label>
                    <Form.Control type="text" onChange={(e) => setChatroom(e.target.value)} />
                </Form.Group>
            </Col>
            <Col sm='12' className="mt-3">
                <Button variant="success" type="submit">Join Chatroom</Button>
            </Col>
        </Row>
    </Form>
}
export default Waitingroom;