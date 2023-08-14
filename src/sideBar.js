import React, { useState, useEffect } from 'react';
import {
    IconPlus,
  } from '@tabler/icons-react';
  import FileItemSide from './fileItemSide'
  import axios from 'axios'
  import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ChatList from './chatList';

const SideBar = ({ showSidebar,toggleSidebar, deleteFileHandler, chats  }) => {
    
  const [showContent, setShowContent] = useState(false);
    const handleMainButtonClick = () => {
        setShowContent(!showContent);
      };
    const handleDisconnectClick = () => {
    
        console.log('Disconnected');
        
      };

      
   
    return (
        <aside
        className={`sidemenu flex flex-col fixed top-0 bottom-0 z-50 flex h-full w-[260px] flex-none flex-col space-y-5 bg-[#202123] p-2 transition-all sm:relative sm:top-0 ${
          showSidebar ? '' : 'hidden'
        }`}
      >
   
   <div class="flex items-center justify-evenly">
   <header className="flex items-center mb-50">
        <button
          className="flex w-[220px] flex-shrink-0 cursor-pointer items-center gap-3 rounded-md border border-white/20 p-3 text-[12.5px] leading-3 text-white transition-colors duration-200 select-none hover:bg-gray-500/10"
          onClick={() => {
            
           
          }}
        >
          <IconPlus size={18} />
          {'New chat'}
        </button>

      
        
      </header>
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
  
   
<ChatList
 chats={chats}
 deleteFileHandler={deleteFileHandler}
/>


  
   <div className="flex-grow flex items-end justify-center">

   <div className="flex flex-col">
   {showContent && (
     <div className="absolute z-10 -mt-8 w-[250px]">
       <button
         onClick={handleDisconnectClick}
         className="bg-gray-900 hover:bg-black-700 border-t-2 border-l-2 border-r-2 border-white text-white font-bold py-2 px-4 w-full rounded-lg mt-2"
       >
         Disconnect
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

      
    );
  }
  
  export default SideBar;