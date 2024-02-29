import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Waitingroom from './components/Waitingroom';
import {  HubConnectionBuilder,LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';

function App() {
  const [conn, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const joinChatRoom = async (username, chatroom) => {
    try {
      //intialize the connection
      const conn=new HubConnectionBuilder()
                  .withUrl('http://localhost:5175/chat')
                  .configureLogging(LogLevel.Information)
                  .build();
      //set up the event handlers
      conn.on("JoinSpecificChatRoom",(username,msg)=>{
        console.log(`msg:${msg}`);
      });

      conn.on("ReceiveSpecificMessage",(username,msg)=>{
          setMessages(messages=>[...messages,{username,msg}]);
      });

      await conn.start();
      //invoke the server method
      await conn.invoke("JoinSpecificChatRoom",{username,chatroom});
      setConnection(conn);

    }
    catch (e) {
      console.error(e);
    }
  }
  const sendMessage = async (message) => {
  try{
    await conn.invoke("SendMessage",message);
  }
  catch(e){
    console.error(e);
  }
  }
  return (
    <div>
      <main>
        <Container>
          <Row className="px-5 my-5">
            <Col sm='12'>
              <h1 className="text-center font-weight-light">Welcome to the ChatApp</h1>
            </Col>
          </Row>
          {!conn ? <Waitingroom joinChatRoom={joinChatRoom}></Waitingroom>:
                   <ChatRoom messages={messages} sendMessage={sendMessage}></ChatRoom>}
        </Container>
      </main>
    </div>
  );
}

export default App;
