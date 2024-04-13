const ApplicationList = (props) => {
    const applications = props.applications
    return ( 
        <div className="application-list">
            {applications.map ((application) => (
                <div className = "preview" key={application.id}>
                    <h2>{ application.name }</h2>
                    <p>Current status: {application.status} </p>
                </div>
            ))}
        </div>
     );
}
 
export default ApplicationList;