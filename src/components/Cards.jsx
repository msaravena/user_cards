const Cards = ( {userContent, color} ) => {
    
    return (
       
            <div className="container"
            style={{ color: color }}>
                <div className="title">
                    <h2>{userContent.name.title}</h2>
                    <h2>{userContent.name.first}</h2> 
                    <h2>{userContent.name.last}</h2>
                </div>
                <div>
                    <img src={userContent.picture.large} alt="" />
                </div>
                <div className="info">
                    <h3><i className='bx bxs-envelope bx-md'></i>{userContent.email}</h3>
                    <h3><i className='bx bxs-phone bx-md' ></i>{userContent.phone}</h3>
                    <div className="location">
                        <i className='bx bxs-map bx-md'></i>
                        <h3>{userContent.location.country}</h3>
                        <h3>{userContent.location.state}</h3>
                        <h3>{userContent.location.city}</h3>
                    </div>
                </div>
            </div>
       
        
       
        
    
        

    )
}

export default Cards