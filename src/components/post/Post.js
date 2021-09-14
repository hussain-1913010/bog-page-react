import React from 'react';
import './post.css';

const Post = () => {
    return (
        <div className="post">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" alt="not found" className="postImg"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt quos vel, architecto vitae iure minus exercitationem omnis ut et porro rem ullam neque laudantium odio officia libero illo quia ad? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ad atque deserunt optio blanditiis eveniet! Reiciendis iure praesentium officiis in, consequatur, aliquam, molestiae earum dolor reprehenderit consequuntur necessitatibus! Laborum, odio! </p>
        </div>
    );
};

export default Post;