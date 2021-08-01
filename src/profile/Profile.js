import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';
const Profile = ({fullName,bio,profession}) => {
    const handleName=()=>{
        alert( fullName)
    }
    return (
        <div>
            <Image/>
            <h1 style={{color:'blue'}}>{fullName}</h1>
            <h2>{bio}</h2>
            <h3>{profession}</h3>
 <button style={{backgroundColor:'blue'}}onClick={handleName}>profile Name</button>
        </div>
    );
}

Profile.defaultProps = {
    fullName:"Hadil Ammar",
    bio:"22 years old student in Go MY Code",
    profession:"law student"
}
Profile.propTypes ={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
}
export default Profile;
