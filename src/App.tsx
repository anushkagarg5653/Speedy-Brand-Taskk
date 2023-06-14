import React from 'react'
import TopicsList from './components/TopicsList';
import Editor from './components/Editor';

const App = () => {
    const topics = [
        {
            name:'The Importance of Establishing a Strong Online Presence', keywords: ['online presence','branding']
        },
        {
            name:'How Fast Turnaround Times in Logo', keywords: ['logo design','website design']
        },
        {
            name:'Affordable Branding Solutions for Startups', keywords: ['logo design','website design']
        },
        {
            name:'The Benefits of Comprehensive Branding Services for Small to Medium-Sized Business', keywords: ['logo design','website design']
        },
        {
            name:'Expert Tips for Choosing right Digital Marketing Agency', keywords: ['Branding','tips']
        }
    ];

    const handleGeneratedBlog = () => {
        console.log('handleGeneratedBlog');
    }

  return (
    <div>
        
        <h1>Categories</h1>
        <TopicsList topics={topics} />
        <Editor onGenerate={handleGeneratedBlog} />
    </div>
  )
}

export default App