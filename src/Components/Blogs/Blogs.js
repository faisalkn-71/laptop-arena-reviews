import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>

            <h2>What is semantic tag?</h2>
            <p>Semantic elements have meaningful names which tells about type of content. HTML5 introduces many semantic elements which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.
                <br />
            There are some semantic tag in HTML which is used to define different parts of a web page:
                <ul>
                    <li>article</li>
                    <li>aside</li>
                    <li>header</li>
                    <li>footer</li>
                    <li>main</li>
                    <li>nav</li>
                    <li>section</li>
                </ul>
            </p>


            <br />


            <h2>What is context api?</h2>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a new feature that allows user to share state across the entire app lightly and with ease.</p>
            
            
            
        </div>
    );
};

export default Blogs;