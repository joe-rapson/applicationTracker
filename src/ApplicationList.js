import {useNavigate} from 'react-router-dom'
const ApplicationList = (props) => {
    const applications = props.applications
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate('/application/'+String(id))
    }
    return ( 
        <div className="application-list">
            {applications.map ((application) => (
                <div className = "preview" key={application.id} onClick={() => handleClick(application.id)}>
                    <h2>{ application.org }</h2>
                    <p>{application.role} </p>
                </div>
            ))}
        </div>
     );
}
 
export default ApplicationList;