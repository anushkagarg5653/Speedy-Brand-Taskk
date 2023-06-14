import React, { useState } from 'react'

type EditorProps = {
    onGenerate: (tone: string, content: string) => void;
};

const Editor = ({onGenerate} : EditorProps) => {
    const [ selectedTone, setSelectedTone ] = useState('');
    const [editorContent, setEditorContent] = useState('');
    const [ undoContent, setUndoContent ] = useState('');
    const [ image, setImage] = useState('');
    const [showEdit, setShowEdit] = useState(false);

    const handleToneSelection = (tone : string) => {
        setSelectedTone(tone);
    }
    const handleGenerate = () => {
        onGenerate(selectedTone, editorContent);
    };

    const handleEditorChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditorContent(e.target.value);
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file){
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string) ;
            };
            reader.readAsDataURL(file);
        }
    }
    const handleUndo = () => {
        setEditorContent(undoContent);
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.ctrlKey && e.key === 'z'){
            e.preventDefault();
            handleUndo();
        }
    }


    const handleCancel = () => {
        setShowEdit(false);
    }

  return (
    <div>
        <h2>Editor</h2>
        <div>
            <h3>Select Tone</h3>
            <button 
            onClick={() => handleToneSelection('Formal')}
            style={{backgroundColor:selectedTone === 'Formal'? 'blue': 'gray'}}
            >
            Formal
            </button>

            <button onClick={() => handleToneSelection('Informal')}
            style={{backgroundColor:selectedTone === 'InFormal'? 'blue': 'gray'}}>
            Informal
            </button>

            <button onClick={() => handleToneSelection('Casual')}
            style={{backgroundColor:selectedTone === 'Casual'? 'blue': 'gray'}}>
            Casual
            </button>
        </div>
        <div>
            <h3>Editor</h3>
            <textarea 
            value={editorContent}
            onChange={handleEditorChange}
            onKeyDown={handleKeyDown}
            />
        </div>
        <div>
            <h3>Add Image</h3>
            <input type="file"
            accept='image/*'
            onChange={handleImageUpload} />
            {image && <img src={image} alt="Upload" style={{width: '200', height: 'auto'}} /> }
        </div>
        <div>
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    </div>   
   
  )
}

export default Editor