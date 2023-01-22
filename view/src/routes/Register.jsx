import {useState} from "react";

const Register = () => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const createNewUser = async (e) => {
        e.preventDefault();
        const user = {
            "userName": username,
            "firstName": firstName,
            "lastName": lastName
        };
        await fetch('api/users', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
    }


    // send post request with username, firstname, lastname

    return (
        <div className="form">
            <div className="toolbar-height"></div>
            <form onSubmit={createNewUser}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required />
                </div>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required onChange={(event) => {setUsername(event.target.value)}} value={username}/>
                </div>
                <div className="input-container">
                    <label>First Name </label>
                    <input type="text" name="uname" required onChange={(event) => {setFirstName(event.target.value)}} value={firstName}/>
                </div>
                <div className="input-container">
                    <label>Last Name </label>
                    <input type="text" name="uname" required onChange={(event) => {setLastName(event.target.value)}} value={lastName}/>
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required/>
                </div>
                <div className="button-container">
                    <input type="submit" value="Register"/>
                </div>
            </form>
        </div>
    )
}

export default Register;