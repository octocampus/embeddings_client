import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './admin.css';
import {
  IconPlus,
} from '@tabler/icons-react';
import Model from './model';
import FileItem from './fileItem';
import FileItemSide from './fileItemSide'
import axios from 'axios'
import SideBar from './sideBar';


export default function Admin() {

  const history = useHistory();

  const navigateToChatPage = () => {
    history.push('/chat');
  };


  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [chats, setChats] = useState([]);
  const [error, setError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.description && files.length > 0) {
      const newChat = {
        name: formData.name,
        description: formData.description,
        pdfs: [...files],
      };

      // Check if a chat with the same name and description already exists
      const chatExists = chats.some(
        (chat) =>
          chat.name === newChat.name && chat.description === newChat.description
      );

      if (chatExists) {
        setError(`Chat with the name "${newChat.name}" and description "${newChat.description}" already exists.`);
      } else {
        setChats((prevChats) => [...prevChats, newChat]);
        toggleModel();
        setFormData({ name: '', description: '' });
        setFiles([]);
        setError(''); // Clear the error message
      }
    }
    
  };
  
  const handleCancel = () => {
    toggleModel();
    setFormData({ name: '', description: '' });
    setFiles([]); 
  };
  
  




  const [files, setFiles] = useState([])
  

  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    file.isUploading = true;
    setFiles([...files, file]);
  
    const formData = new FormData();
    formData.append("newFile", file, file.name);
  
    axios.post('http://localhost:8080/upload', formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        console.error(err);
        removeFile(file.name);
      });
  };
  
  

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


const deleteMainSectionFileHandler = (_name) => {
  axios.delete(`http://localhost:8080/upload?name=${_name}`)
    .then((res) => {
      removeFile(_name);
    })
    .catch((err) => console.error(err));
}


  const [showContent, setShowContent] = useState(false);

  const handleMainButtonClick = () => {
    setShowContent(!showContent);
  };
  const handleDisconnectClick = () => {
    
    console.log('Disconnected');
    
  };

  const [model, setModel] = useState(false);
  const modalRef = useRef(null);

  const toggleModel = () => {
    setModel(!model);
  };

const handleClickOutside = (event) => {
  if (modalRef.current && !modalRef.current.contains(event.target)) {
    toggleModel();
  }
};


  const [showSidebar, setShowSidebar] = useState(true);
  const [showMenuBar, setShowMenuBar] = useState(false); 

 
  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
    setShowMenuBar(false); 
  };

  
  const toggleMenuBar = () => {
    setShowMenuBar((prevShowMenuBar) => !prevShowMenuBar);
    setShowSidebar(true); 
  };

 
  const resetVisibility = () => {
    setShowMenuBar(false);
    setShowSidebar(true);
  };
    const handleFile = async (file) => {
    
      console.log('upload file success and save embedding success');
    };
    
  
  return (
    <div className='admin flex flex-col md:flex-row'>
      
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


<section className='overflow-none relative flex-1 bg-white dark:bg-[#343541]'>

<svg
          onClick={toggleMenuBar}
          className={`h-8 w-8 text-white m-5 ${showSidebar ? 'hidden' : ''}`}
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='currentColor'
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' />
          <rect x='4' y='4' width='16' height='16' rx='2' />
          <line x1='9' y1='4' x2='9' y2='20' />
        </svg>
<div className='mx-auto flex w-[350px] flex-col space-y-10 pt-12 sm:w-[600px]'>

    <div className='flex h-full flex-col space-y-4 rounded border border-neutral-200 p-4 dark:border-neutral-600'>
    <div className="flex items-center justify-center w-full">
            <label 
              
              onChange={uploadHandler}
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-10 h-10 mb-3 text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="16 16 12 12 8 16" />  <line x1="12" y1="12" x2="12" y2="21" />  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />  <polyline points="16 16 12 12 8 16" /></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{'Click to upload'}</span> {'or drag and drop.'}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{'File supported types: TXT, PDF, XLSX, DOCX, Zip...'}</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" multiple onChange={(e) => {
   if (e.target.files && e.target.files.length > 0) {
      Array.from(e.target.files).forEach(file => {
         handleFile(file).then(r => console.log("Upload file success and save embedding success"));
      });
   }
}}/>
            </label>
        </div>

    </div>

</div>

<ul>
          {files.map(f => (
            <FileItem
            key={f.name}
            file={f}
            deleteFile={() => deleteMainSectionFileHandler(f.name)}
          />
          
          ))}
        </ul>
        {files.length > 0 && (
          <button
            className='bg-blue-600 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 border border-blue-700 rounded-lg text-base'
            onClick={(e) => {
              handleFormSubmit(e); 
              toggleModel();
            }}
          >
            New chat
          </button>
        )}



</section>
{model && (
        <div
          className='fixed top-0 left-0 right-0 bottom-0 w-screen h-screen'
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className='absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-5 bg-gray-200 px-7 py-7 rounded-md w-96 '
          >
            <form onSubmit={handleFormSubmit}>
 <div class="mb-6">
        <label for="base-input" class="block mb-2 text- font-bold  text-gray-900 ">Name</label>
        <input type="text" id="base-input" placeholder="Enter name" value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "/>
        </div>  
        <div class="mb-6">
         <label for="large-input" class="block mb-2 text-sm  font-bold  text-gray-900 text-center align-top">description</label>
         
    <input type="text" id="large-input" placeholder="description..." rows="4" value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="block w-full h-24 p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500  placeholder-top placeholder-left focus:border-blue-500     "/>      
      </div>
      <div className="flex space-x-8 justify-center">
    <button
      type="submit"
      onClick={handleFormSubmit}
      className="px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Confirm
    </button>
    <button
      type="button"
      onClick={handleCancel}
      className="px-4 py-2 text-sm text-gray-900 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-300"
    >
      Cancel
    </button>
  </div>
  {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
       
          </div>
        </div>
      )}
    
    
    </div>
   
  )
}


