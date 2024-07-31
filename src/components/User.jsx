// import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

function User() {

    const { data } = useFetchData('https://jsonplaceholder.typicode.com/users')

    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const users = await response.json()
    //         setUsers(users)
    //     }
    //     fetchUser();
    // }, [])

    return (
        <div className="User">
            <h1>ユーザー一覧</h1>
            <ul>
                {data.map((user) =>
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </div>
    );
}

export default User;
