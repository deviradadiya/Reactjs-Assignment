import React from 'react';

function User() {
    // Array of users with unique ids
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Eve' }
    ];

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {/* Map through the users array and render each user */}
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default User;