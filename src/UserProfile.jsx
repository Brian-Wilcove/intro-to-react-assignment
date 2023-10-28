function UserProfile({user}){
    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <img src={user.imgUrl} alt="test"/>
        </div>
    )}

export default UserProfile;