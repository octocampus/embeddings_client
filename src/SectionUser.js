import React, { useState, useEffect } from 'react';
import FileItem
 from './fileItem';
 import nemo from './img/nemo.svg'
import bot from './img/bot.svg'
import { useParams } from 'react-router-dom';
 export default function SectionUser({
    messages,
    showSidebar,
    messagesEndRef,
    setUserInput,
    toggleMenuBar,
    handleKeyPress,
    handleUserInput,
    userInput,
    chats
  }) {
    const { chatId } = useParams();
    const selectedChat = chats.find((chat) => chat.id === chatId);
    return (
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
      
    );
  }
  
 