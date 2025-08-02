import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { socket } from "@/socket/Socket"
import { useEffect, useState } from "react"

const MessageBox = () => {
    const [message, setMessage] = useState("");

    function sendMessage() {
        if (message.trim()) {
            socket.emit('global_message', message);
            setMessage("");
        }
    }

    useEffect(() => {
        const messageHandler = (data:any) => {
            console.log('Message received:', data);
            alert(data.message || data);
        };

        socket.on('receive_message', messageHandler);

        return () => {
            socket.off('receive_message', messageHandler);
        };
    }, []);

    return (
        <div>
            <Input
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button onClick={sendMessage}>Send Message</Button>
        </div>
    )
}

export default MessageBox