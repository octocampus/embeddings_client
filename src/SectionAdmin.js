import React, { useState, useEffect } from 'react';
import FileItem
 from './fileItem';
 export default function SectionAdmin({
    files,
    handleFile,
    handleFormSubmit,
    toggleModel,
    toggleMenuBar,
    deleteMainSectionFileHandler,
    showSidebar,
    uploadHandler

  }) {
    return (
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
      
    );
  }
  
 