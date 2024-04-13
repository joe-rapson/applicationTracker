import {useParams} from 'react-router-dom'
import useFetch from './useFetch'

const ApplicationInfo = () => {
    const {id} = useParams()
    const {data:applications, isPending, error} = useFetch('http://localhost:8000/applications')
    const application = applications[id-1]

    return ( 
        <div className="application-info">
            <h2>Application Details</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading content... </div>}
            {applications && <div className='application'>
                <p>{application.name} {application.location }{application.status }</p>
                </div>}
            

        </div>
     );
}
 
export default ApplicationInfo;