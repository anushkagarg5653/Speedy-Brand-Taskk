import React,{ useState } from 'react'
import styles from './Topic.module.css'
import Editor from './Editor';
type TopicProps = {
    name: string;
    keywords: string[];
    onDelete: () => void;
};

const Topic = ({name, keywords, onDelete}: TopicProps) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleEditorGenerate = (tone: string, content: string) => {
        console.log('Generating blog with tone:', tone);
    console.log('Blog content:', content);
    setShowEdit(false);
    }
    const handleEditTopic = () => {
        setShowEdit(true);
    }
  return (
    <div className={styles.wrapper}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            {
                keywords.map((keyword, index) => (
                    <button className={styles.pill} key ={index}> {keyword} </button>
                ))
            }
        </div>
        <button className={styles.deleteBtn} onClick={onDelete}>Delete</button>
        <button className={styles.AddBtn} onClick={handleEditTopic}>Write</button>
        {showEdit && <Editor onGenerate={handleEditorGenerate}/>}
        </div>
        
    </div>
  )
}

export default Topic