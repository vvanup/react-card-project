import React from 'react';
import '../App.css';

const ProfileImage = (props) =>{
    return (
   <img src={props.profileImage} className="img-rounded profileImage" alt="Cinque Terre" />
    );
}

export default ProfileImage;