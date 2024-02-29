import React from 'react';
import '../App.css';
const MessageContainer = ({ messages }) => {
    return (
        <div>
            {messages.map((message, index) => (
                <div className="message-container" key={index}>
                    <div className="avatar-circle" style={{ backgroundColor: "#6a5acd" }}>
                        <span>{message.username.substring(0, 2)}</span>
                    </div>
                    <div className="message-content">
                        <p className="small mb-0">
                            {message.msg}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default MessageContainer;
