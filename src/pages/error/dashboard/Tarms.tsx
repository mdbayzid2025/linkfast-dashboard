import JoditEditor from 'jodit-react';
import React, { useMemo, useRef, useState } from 'react'

const Terms = ({placeholder} : any) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = useMemo(() => ({
    readonly: false, // all options from https://xdsoft.net/jodit/docs/,
    placeholder: placeholder || 'Start typings...'
  }),
    [placeholder]
  );

  return (
    <div className='bg-white p-4 rounded-2xl'>
       <h1 className="text-2xl text-[#009A54] py-6 font-semibold">Terms</h1>
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

export default Terms