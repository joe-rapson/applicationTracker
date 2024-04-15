import { useState } from "react";

const Create = () => {
    const [formData, setFormData] = useState({
        org: '',
        role: '',
        loc: '',
        deadline: '',
        startDate: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const application = { org: formData.org, role: formData.role, loc: formData.loc, deadline: formData.deadline, startDate: formData.startDate }
        fetch('http://localhost:8000/applications', {
            method: 'POST',
            headers: { "Content-type": "application/json"},
            body: JSON.stringify(application)
        }).then(() => {
            console.log('new added')
        })
        setFormData({ org: '', role: '', loc: '', deadline: '', startDate: ''});
    };
   
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Organisation:</label>
            <input type="text" name="org" value={formData.org} onChange={handleChange} required />
        </div>
        <div>
            <label>Role:</label>
            <input type="text" name="role" value={formData.role} onChange={handleChange} required />
        </div>
        <div>
            <label>Location:</label>
            <input type ="text" name="loc" value={formData.loc} onChange={handleChange} required/>
        </div>
        <div>
            <label>Deadline:</label>
            <input type="datetime-local" name="deadline" value={formData.deadline} onChange={handleChange} required />
        </div>
        <div>
            <label>Start Date:</label>
            <input type="datetime-local" name="start" value={formData.start} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
        </form>
    );
    };
    
    export default Create;