import React, { useState } from 'react'
import Topic from './Topic';
import styles from './TopicsList.module.css'


type TopicData = {
    name: string;
    keywords: string[];
};

type TopicListProps = {
    topics: TopicData[];
}

const TopicsList = ({topics} : TopicListProps) => {

    const [showForm, setShowForm] = useState(false);
    const [newTopicName, setNewTopicName] = useState('');
    const [newTopicKeywords, setNewTopicKeywords] = useState('');
    const [topicList, setTopicList] = useState<TopicData[]>(topics);

    const handleAddTopic = () => {
        setShowForm(true);
    }

    const handleSaveTopic = () => {
        const topic: TopicData = {
            name: newTopicName,
            keywords: newTopicKeywords.split(',').map((keyword) => keyword.trim()),
        }
        console.log(topic);
        setShowForm(false);
        setNewTopicName('');
        setNewTopicKeywords('');
    };

    const handleCancelAddTopic = () =>{
        setShowForm(false);
        setNewTopicName('');
        setNewTopicKeywords('');
    }

    const handleDeleteTopic = (index : number) => {
        const updatedtopics = [...topics];
        updatedtopics.splice(index,1);
        setTopicList(updatedtopics);
        console.log(`delete topic at index ${index}`);
    }
  return (
    <div>
        <h2 >Topics List</h2>
        <div className={styles.topicsList}>
            {topics.map((topic, index) =>(
            <Topic 
            key={index} 
            name = {topic.name}
            keywords={topic.keywords}
            onDelete={() => handleDeleteTopic(index)}
             />
        ))}
        </div>
        
        {
            showForm ? (
                <div>
                    <input type="text"
                            placeholder='Enter the topic'
                            value = {newTopicName}
                            onChange={(e) => setNewTopicName(e.target.value)} />
                    <input type="text"
                            placeholder='Enter the keywords'
                            value={newTopicKeywords}
                            onChange={(e) => setNewTopicKeywords(e.target.value)} 
                            />
                    <button onClick={handleSaveTopic}>Save </button>
                    <button onClick={handleCancelAddTopic}>Cancel </button>
                </div>
            ) : 
            (
                <button onClick={handleAddTopic}>Add topic</button>
            )
        }
    </div>
  )
}

export default TopicsList