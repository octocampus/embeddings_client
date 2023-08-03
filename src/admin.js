import React, { useState } from 'react';
import './admin.css';
import { IconSend} from '@tabler/icons-react';
import {
  IconArrowBarLeft,
  IconPlus,
} from '@tabler/icons-react';
export default function Admin() {
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

  // Function to reset the visibility of both sidebar and menu bar
  const resetVisibility = () => {
    setShowMenuBar(false);
    setShowSidebar(true);
  };
    const handleFile = async (file) => {
    
      console.log('upload file success and save embedding success');
    };
    
  
  return (
    <div className='admin'>


<aside className={`sidemenu flex flex-col fixed top-0 bottom-0 z-50 flex h-full w-[260px] flex-none flex-col space-y-5 bg-[#202123] p-2 transition-all sm:relative sm:top-0 ${showSidebar ? "" : "hidden"  }`}>
   
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
       {!showSidebar && (
         <button onClick={resetVisibility} className="text-white">Show Sidebar</button>
       )}
   </div>
 
   <a
      href="#"
      className="block max-w-sm p-2 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div>
        {/* You can add content inside the div if needed */}
      </div>

      <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Embeddings: technology acquisitions 2021
      </h5>
      <p className="font-normal text-sm h-16 overflow-hidden text-gray-700 dark:text-gray-400">
        Unleashing the power of representation learning in the digital realm.
      </p>

      <div className="flex items-center justify-center m-4">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <svg
              className="h-8 w-8 text-gray-500" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
            <p className="text-gray-600 text-sm w-full">article project Key Methods Used in Qualitative Document Analysis.pdf</p>
          </div>

          <svg
            className="h-6 w-6 text-white" 
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
    </a>
   <a
     href="#"
     class="block max-w-sm p-2 mb-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
   >
     <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Python</h5>
     <p class="font-normal text-sm h-16 overflow-hidden text-gray-700 dark:text-gray-400">
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


<section className='overflow-none relative flex-1 bg-white dark:bg-[#343541]'>

 
<div className='mx-auto flex w-[350px] flex-col space-y-10 pt-12 sm:w-[600px]'>
    <div className='flex h-full flex-col space-y-4 rounded border border-neutral-200 p-4 dark:border-neutral-600'>
    <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file"
                   className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor"
                         viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{'Click to upload'}</span> {'or drag and drop.'}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{'File supported types: TXT, PDF, XLSX, DOCX, Zip...'}</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        handleFile(e.target.files[0]).then(r => console.log("upload file success and save embedding success"));
                    }
                }}/>
            </label>
        </div>

    </div>

</div>

<div className='flex items-center justify-center w-full m-4'>
  <div className='flex items-center space-x-12'>
    <div className='flex items-center  space-x-3'>
    <svg class="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
    <h2 className='text-gray-400'>article project Key Methods Used in Qualitative Document Analysis.pdf</h2>
    </div>
    
    <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </div>
</div>
<div className='flex items-center justify-center w-full m-4'>
  <div className='flex items-center space-x-12'>
    <div className='flex items-center  space-x-3'>
    <svg class="h-4 w-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <polyline points="13 2 13 9 20 9" />
    </svg>
    <h2 className='text-gray-400'>article project Key Methods Used in Qualitative Document Analysis.pdf</h2>
    </div>
    
    <svg class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </div>
</div>
<button className='bg-blue-600 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg text-base'>
  New chat
</button>


{/* <div
        className="stretch mx-2 mt-4 flex flex-row gap-3 last:mb-2 md:mx-4 md:mt-[52px] md:last:mb-6 lg:mx-auto lg:max-w-3xl">
        
          
        

     
         
        

        <div
          className="relative flex w-full flex-grow flex-col rounded-md border border-black/10 bg-white py-2 shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:border-gray-900/50 dark:bg-[#40414F] dark:text-white dark:shadow-[0_0_15px_rgba(0,0,0,0.10)] md:py-3 md:pl-4">
          <textarea
            
            className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 pl-2 text-black outline-none focus:ring-0 focus-visible:ring-0 dark:bg-transparent dark:text-white md:pl-0"
            style={{
              resize: 'none',
              bottom: `400px`,
              maxHeight: '400px',
              
            }}
            placeholder={'Type a message...' || ''}
            
            rows={1}
            
          />

          <button
            className="absolute right-3 rounded-sm p-1 text-neutral-800 hover:bg-neutral-200 hover:text-neutral-900 focus:outline-none dark:bg-opacity-50 dark:text-neutral-100 dark:hover:text-neutral-200"
         
          >
            <IconSend size={16} className="opacity-60"/>
          </button>
        </div>
      </div> */}
</section>
       
    
    
    </div>
   
  )
}


