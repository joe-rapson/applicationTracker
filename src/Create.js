const Create = () => {
    return ( 
        <div className="create">
            <h2>Track a new application</h2>
            <form>
                <label>Organisation</label>
                <input type='text' required/>
                <label>Location</label>
                <input type='text' required/>
                <label>Final application date</label>
                <input type='date' required/>
                <label>Beginning</label>
                <input type='date' required/>
                <label>Duration</label>
                <input type='text' required/>
                <label>Status</label>
                <input type='select' required/>
                
            </form>
        </div>
     );
}
 
export default Create;