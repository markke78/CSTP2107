import ProfileCard from "../ProfileCard/ProfileCard";
const ProfileInfo = (data) => {
    const profileData = data.profileData[0].data;
    console.log(profileData);
    return (
        <div className="row" id="card">
            
            {
                profileData.map((detil)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <ProfileCard data={detil}/>
                })
            }
            
        </div>
    )
}

export default ProfileInfo;