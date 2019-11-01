import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img src="https://pbs.twimg.com/media/DuzjZjjVAAAaTOK.jpg" alt="Background"
          width="100%" height="250px" />
      </div>
      <div>
        <img src="https://www.4d83.net/wp-content/uploads/sites/2704/2017/02/VECTO_4D_PICTO_Rats_Souris.png"
          alt="Rat logo" />
      </div>
      <MyPosts hello="yo" />
    </div>
  )
}

export default Profile;