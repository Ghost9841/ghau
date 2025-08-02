import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { socket } from "@/socket/Socket"
import { useEffect } from "react"


const MessageBox = () => {
    function sendMessage () {
        socket.emit('global_message', 'Hello from the client!')
    }
useEffect(() => {
  

  return () => {
    
  }
}, [socket])

  return (
    <div>
      <Input
      placeholder="Message"
      />
      <Button onClick={sendMessage}>Send Message</Button>
    </div>
  )
}

export default MessageBox
