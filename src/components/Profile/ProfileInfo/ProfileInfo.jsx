import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://pbs.twimg.com/media/DuzjZjjVAAAaTOK.jpg" alt="Background"
                    width="100%" height="250px" />
            </div>
            <div className={classes.descriptionBlock}>
                <img src="https://www.4d83.net/wp-content/uploads/sites/2704/2017/02/VECTO_4D_PICTO_Rats_Souris.png"
                    alt="Rat logo" />
                <div>Hello! Description will be there!</div>
            </div>
        </div>
    )
}

export default ProfileInfo;