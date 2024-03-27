import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const socket = io('http://localhost:3000/chat');

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to the server');
        }) 
        
        socket.on('newChatMessage', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
        
        return () => {
            socket.disconnect();
        };
    }, []);

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            socket.emit('newChatMessage', newMessage);
            setNewMessage('');
        }
    };

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message.message}</div>
                ))}
            </div>
            <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Chat;
