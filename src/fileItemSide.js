import React from 'react';

const FileItemSide = ({ file, deleteFile }) => {

    return (
        <li key={file.name}>
        <div className="flex items-center justify-center m-4">
          <div className="flex items-center space-x-5 w-full">
            <div className="flex items-center space-x-3">
              <svg
                className="h-4 w-4 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="24" // Set a fixed width for the SVG icon
                height="24" // Set a fixed height for the SVG icon
              >
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                <polyline points="13 2 13 9 20 9" />
              </svg>
              <p className="text-gray-200 text-[12px] w-full text-left">{file.name}</p>
            </div>
  
            {!file.isUploading && (
              <button onClick={() => deleteFile(file.name)}>
                <svg
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </li>
       
    )
}

export default FileItemSide