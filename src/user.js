import React, { useState , useEffect, useRef} from 'react';
import './user.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SideBar from './sideBar';
import SectionUser from './SectionUser';
import axios from 'axios'
function User() {

  const history = useHistory();

  const navigateToAdminPage = () => {
    history.push('/');
  };


  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].type === 'user') {
      generateBotResponse();
    }
  }, [messages]);

  const handleUserInput = (inputText) => {
    if (!inputText.trim()) {
      // If the input is empty or contains only whitespace characters, return without sending the message
      return;
    }

    setMessages([...messages, { text: inputText, type: 'user' }]);
    setUserInput(''); 
  };

  const generateBotResponse = () => {
    // Simulating the bot's response here (always responds with "Hello, I'm an AI")
    const botResponse = "Hello, I'm an AI";
    setMessages([...messages, { text: botResponse, type: 'assistant' }]);
  };

  // Function to handle the "Enter" key press event
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleUserInput(userInput);
    }
  };



  const [showContent, setShowContent] = useState(false);

  const handleMainButtonClick = () => {
    setShowContent(!showContent);
  };
  const handleDisconnectClick = () => {
    // Perform your disconnect action here
    console.log('Disconnected');
    // You can implement your desired behavior, like logging out or ending a session
  };

  const [showSidebar, setShowSidebar] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(false); // New state for the menu bar

  // Function to toggle the visibility of the sidebar and menu bar
  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
    setShowMenuBar(false); // Hide the menu bar when the sidebar is toggled
  };

  // Function to toggle the visibility of the menu bar
  const toggleMenuBar = () => {
    setShowMenuBar((prevShowMenuBar) => !prevShowMenuBar);
    setShowSidebar(true); // Hide the sidebar when the menu bar is toggled
  };

  
  const resetVisibility = () => {
    setShowMenuBar(false);
    setShowSidebar(true);
  };

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]); 

  const [chats, setChats] = useState([]);
  const [files, setFiles] = useState([])
  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  
const deleteFileHandler = (_name, chatIndex) => {
  axios.delete(`http://localhost:8080/upload?name=${_name}`)
    .then((res) => {
      removeFile(_name);

      setChats(prevChats => {
        const updatedChats = [...prevChats];
        const updatedChatFiles = updatedChats[chatIndex].pdfs.filter(pdf => pdf.name !== _name);
        updatedChats[chatIndex].pdfs = updatedChatFiles;
        return updatedChats;
      });
    })
    .catch((err) => console.error(err));
}

  return (
    <div className="User">
 
 <SideBar
showSidebar = {showSidebar}
toggleSidebar = {toggleSidebar}
 deleteFileHandler = {deleteFileHandler}
 chats  = {chats}
    />


    <SectionUser
    chats = {chats}
 messages={messages}
 showSidebar={showSidebar}
 messagesEndRef={messagesEndRef}
 setUserInput={setUserInput}
 toggleMenuBar={toggleMenuBar}
 handleKeyPress={handleKeyPress}
 userInput={userInput}
 handleUserInput={handleUserInput}

/>
    </div>
  );
}

export default User;
