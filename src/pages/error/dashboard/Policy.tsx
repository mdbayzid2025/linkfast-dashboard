import JoditEditor from 'jodit-react';
import React, { useMemo, useRef, useState } from 'react'

const Policy = ({placeholder} : any) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

 const config = {
    readonly: false,
    placeholder: "Start typing...",
    style: {
      height: "60vh",
      background: "white",
    },
  };

  return (
    <div className='bg-white p-6 rounded-2xl'>
       <h1 className="font-semibold text-2xl text-[#009A54] mb-6">Policy</h1>        
      <JoditEditor
        
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => { }}
        
      />
    </div>
  )
}

export default Policy