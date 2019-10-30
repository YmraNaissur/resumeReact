import React from 'react';
import classes from './Profile.module.css';

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
      <div>
        My posts
          <div>
          New post
          </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            Post 1
          </div>
          <div className={classes.item}>
            Post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;