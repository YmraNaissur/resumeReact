import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let posts = [
  {
      id: 1,
      message: "Hi, how are you?",
      avatar: "https://avt-9.foto.mail.ru/mail/otmop03b/_avatar180?",
      likeCount: 20
  },
  {
      id: 2,
      message: "Hello! It's my second post :)",
      avatar: "https://ae01.alicdn.com/kf/HTB1e_tdQpXXXXXtXFXXq6xXFXXXN/2x.jpg",
      likeCount: 15
  },
  {
      id: 3,
      message: "О, чуваки, вы все здесь )))",
      avatar: "https://img.discogs.com/pOI-oRHGTxKPLwIsUBEEirj4r4c=/300x300/filters:strip_icc():format(jpeg):quality(40)/discogs-avatars/U-2604026-1464113040.png.jpg",
      likeCount: 4
  }
];

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts data={posts} />
    </div>
  )
}

export default Profile;