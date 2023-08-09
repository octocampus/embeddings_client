import React, { useState , useEffect, useRef} from 'react';
import './user.css';
import nemo from './img/nemo.svg'
import bot from './img/bot.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
  

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

  return (
    <div className="User">
 
      <aside className={`sidemenu flex flex-col ${showSidebar ? "" : "hidden"} `}>
   
  <div className="flex items-center justify-evenly">
    <h1 className="p-3 transition-all ease duration-250 text-lg">My chat</h1>
    {showSidebar && (
        <svg
          onClick={toggleSidebar}
          className="h-8 w-8 text-white flex justify-end"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <line x1="9" y1="4" x2="9" y2="20" />
        </svg>
      )}
      
  </div>

  <a
    href="#"
    className="block max-w-sm p-2 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
      Embeddings: technology acquisitions 2021
    </h5>
    <p className="font-normal text-sm h-16 overflow-hidden text-gray-700 dark:text-gray-400">
      Unleashing the power of representation learning in the digital realm.
    </p>
  </a>

  <a
    href="#"
    className="block max-w-sm p-2 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Python</h5>
    <p className="font-normal text-sm h-16 overflow-hidden text-gray-700 dark:text-gray-400">
      Empowering developers with simplicity, versatility, and endless possibilities.
    </p>
  </a>
  <div className="flex-grow flex items-end justify-center">
  {/* Container to display content above the button */}
  <div className="flex flex-col">
  {showContent && (
    <div className="absolute z-10 -mt-8 w-[250px]">
      <button
        onClick={handleDisconnectClick}
        className="bg-gray-900 hover:bg-black-700 border-t-2 border-l-2 border-r-2 border-white text-white font-bold py-2 px-4 w-full rounded-lg mt-2"
      >
        Log Out
      </button>
    </div>
  )}
  <button
    onClick={handleMainButtonClick}
    className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg text-base relative w-[250px]"
  >
    Mohamed el hajjami
  </button>
</div>


</div>

    </aside>


      <section className = "chatbox relative w-full sm:w-[calc(100% - 16rem)] ">
      <div className='flex justify-between m-5 items-center'>
  <div className='left flex items-center space-x-4'>
    <svg
      onClick={toggleMenuBar}
      className={`h-8 w-8 text-white ${showSidebar ? "hidden" : ""}`}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="9" y1="4" x2="9" y2="20" />
    </svg>
    <h1 className='font-bold text-2xl text-white font-serif'>Embeddings: technology acquisitions 2021</h1>
  </div>

  <div className="flex right justify-evenly space-x-4">
  <svg className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>

  <svg className="h-8 w-8 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>

  <svg className="h-8 w-8 text-blue-300" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -5v5h5" />
    <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 5v-5h-5" />
  </svg>

  <svg className="h-8 w-8 text-blue-300" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
    <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
    <line x1="16" y1="5" x2="19" y2="8" />
  </svg>
</div>
        </div>
       

      
        <div className="absolute top-16 left-0 bottom-16 right-0 overflow-y-auto p-4 m-10 px-10 ">
  {messages.map((message, index) => (
    <div
      key={index}
      className={`${
        message.type === 'user' ? 'justify-end ' : 'justify-start'
      } items-center text-left flex m-4 bg-opacity-10 `}
    >
      {message.type === 'user' && (
        <React.Fragment>
          <div
            className={`message py-3 px-4 bg-gray-600 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white`}
          >
            {message.text}
          </div>
          <img
            className="avatar bg-white rounded-full w-10 h-10 ml-4"
            src={nemo}
            alt="Nemo Avatar"
          />
        </React.Fragment>
      )}
      {message.type === 'assistant' && (
        <React.Fragment >
          <img
            className="avatar bg-white rounded-full w-10 h-10 mr-4"
            src={bot}
            alt="Bot Avatar"
          />
          <div
            className={`message py-3 px-4 bg-gray-900 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white`}
          >
            {message.text}
          </div>
        </React.Fragment>
      )}
    </div>
  ))}
  <div ref={messagesEndRef} />
</div>











        
        
        
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center">
        <div className="flex items-center bg-white rounded-md shadow-md p-2 w-4/5">
          <input
            type="text"
            className="w-full py-1 px-3 text-gray-700 rounded-md focus:outline-none"
            placeholder="Ask any question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress} // Add the event listener for "Enter" key press
          />
          <button
            type="button"
            className="ml-2 p-1 rounded-full bg-blue-300 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={() => handleUserInput(userInput)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
  


      </section>
    </div>
  );
}

export default User;
