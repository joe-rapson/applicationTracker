import {useState} from 'react'
import ApplicationList from "./ApplicationList";
import useFetch from "./useFetch"

const Home = () => {
    const {data:applications, isPending, error} = useFetch('http://localhost:8000/applications')
    //search bar
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className = "home">
            <h2>Your Applications</h2>
            <input type="text" value={inputValue} onChange={handleChange} />
            {error && <div>{error}</div>}
            {isPending && <div>Loading content... </div>}
            {applications && <ApplicationList applications = {applications.filter((application) => application.name.toLowerCase().includes(inputValue.toLowerCase())) }/> }
            
        </div>
      );
}
 
export default Home;