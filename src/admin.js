import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './admin.css';
import {
  IconPlus,
} from '@tabler/icons-react';
import Model from './ModalComponent';
import FileItem from './fileItem';
import FileItemSide from './fileItemSide'
import axios from 'axios'
import SideBar from './sideBar';
import SectionAdmin from './SectionAdmin'
import ModalComponent from './ModalComponent';
export default function Admin() {

  
  
  

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
      
     <SideBar
showSidebar = {showSidebar}
toggleSidebar = {toggleSidebar}
 deleteFileHandler = {deleteFileHandler}
 chats  = {chats}
    />
    

<SectionAdmin
 chats={chats}
 files={files}
 handleFile={handleFile}
 handleFormSubmit={handleFormSubmit}
 toggleModel={toggleModel}
 toggleMenuBar={toggleMenuBar}
 deleteMainSectionFileHandler={deleteMainSectionFileHandler}
 uploadHandler={uploadHandler}
 showSidebar={showSidebar}

/>
{model && (
        <ModalComponent
          modalRef={modalRef}
          handleClickOutside={handleClickOutside}
          handleFormSubmit={handleFormSubmit}
          handleCancel={handleCancel}
          formData={formData}
          setFormData={setFormData}
          error={error}
        />
      )}
    
    
    </div>
   
  )
}


