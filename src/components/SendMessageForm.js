import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = React.useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
            <InputGroup className="mb-3 mt-3">
                <FormControl
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" variant="secondary" disabled={!message}>Send</Button>
            </InputGroup>
        </form>
    );
}
export default SendMessageForm;