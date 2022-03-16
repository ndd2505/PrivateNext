const ProfileComp = () => {
    return (
        <div className="profile-desc">
            <div className="profile-pic">
                <div className="count-indicator">
                    <img className="img-xs rounded-circle " src="https://www.bootstrapdash.com/demo/corona/jquery/template/assets/images/faces/face15.jpg" alt="" />
                    <span className="count bg-success"></span>
                </div>
            </div>
            <div className="profile-name">
                <h5 className="mb-0 font-weight-normal">
                    Duy Nguyen
                </h5>
                <span>
                    Filbert Benjamin Alexander
                </span>
            </div>
            {/* // dropdown here */}
            {/* <a href="#" id="profile-dropdown" data-bs-toggle="dropdown">
                <i className="mdi mdi-dots-vertical"></i>
            </a> */}
        </div>
    )
}

export default ProfileComp