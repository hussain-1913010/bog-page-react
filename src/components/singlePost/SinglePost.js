import React from "react";
import "./singlepost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://themetrust.com/wp-content/uploads/2018/06/blog-resource-cover-1000x500.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Muneem</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi et
          quidem nihil recusandae excepturi eum doloribus aliquam magni
          expedita, ab commodi fugit facilis quisquam voluptas, hic esse
          assumenda sapiente labore rerum, neque id quos provident delectus
          obcaecati? Dignissimos, praesentium suscipit atque consectetur sit
          saepe ad eveniet aperiam hic exercitationem porro officia reiciendis
          earum reprehenderit laboriosam quaerat aliquam doloremque, ut enim
          nesciunt quibusdam asperiores esse repellat. Unde deleniti vel
          facilis, expedita sunt nulla at quos, accusamus sapiente consectetur
          fuga quam eveniet aperiam harum porro tenetur nihil praesentium
          aspernatur sequi non itaque? Dolorem quibusdam enim eum excepturi
          voluptatum cupiditate quidem, fugit facilis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
