const withUserAdditionalInfo = (Component, user) => () => {

    return (
        <div>
            <img src={user.image} alt="profile photo" />
            <p>Blood Group: {user.bloodGroup}</p>
            <Component user={user} />
        </div>
    )
}

export default withUserAdditionalInfo;