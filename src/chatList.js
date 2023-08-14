import React, { useState, useEffect } from 'react';
import FileItemSide from './fileItemSide'

const ChatList = ({  chats , deleteFileHandler}) => {
    
  
    
  
    return (
        <>
        {chats.map((chat, index) => (
            chat.pdfs.length > 0 && (
              
              <a
              
                key={index}
                href="#"
                className="block max-w-sm p-2 mb-5 flex flex-col align-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                
              >
               
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-200 dark:text-white">
                  {chat.name}
                </h5>
                <p className="font-normal text-sm h-auto overflow-hidden text-left text-gray-700 px-2 dark:text-gray-400">
                  {chat.description}
                </p>
                
                <ul>
                  {chat.pdfs.map((pdf, pdfIndex) => (
                    <FileItemSide
                      key={pdfIndex}
                      file={pdf}
                      deleteFile={() => deleteFileHandler(pdf.name, index)}
                    />
                  ))}
                </ul>
              </a>
              
            )
          ))}

          </>
      
    );
  }
  
  export default ChatList;