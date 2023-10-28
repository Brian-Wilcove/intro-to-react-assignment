function UserProfile(name, email, imgUrl, key){
    return(
        <li key={key}>
            <h2>{name}</h2>
            <p>{email}</p>
            <img src={imgUrl} alt="test"/>
        </li>
    )}

export default UserProfile;