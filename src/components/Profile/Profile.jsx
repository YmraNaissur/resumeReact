import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profileData.profilePosts}
        newPostText={props.profileData.newPostText} store={props.store} />
    </div>
  )
}

export default Profile;