/* eslint-disable react/prop-types */
import './ProfileCard.css';
const ProfileCard = ({data}) => {

    return (
        <div className="col-md-4 mb-md-4 mb-4">
            <div className="card d-flex flex-column align-items-center justify-content-center bg-transparent">
                <div className="img-container rounded-circle">
                    <img className="rounded-circle" src={data.avatar} alt="Avatar" />
                </div>
                <dif className="h4">
                    {data.first_name}
                </dif>
                <p className="designation text-muted text-uppercase">
                    {data.email}
                </p>                

            </div>

            
        </div>
    )
}

export default ProfileCard;

