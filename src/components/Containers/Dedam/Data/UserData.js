let users = [
    {
        id: 0,
        username: 'admin',
        password: 'admin',
        email: 'admin@admin.com',
        gender: '0',
        firstname: 'Administrator',
        lastname: 'Admin',
        birthday: '1990-01-01',
    },
    {
        id: 1,
        username: 'client',
        password: 'client',
        email: 'p.petrauskas@gmail.com',
        gender: '1',
        firstname: 'Petras',
        lastname: 'Petrauskas',
        birthday: '1991-01-01',
    },
    {
        id: 2,
        username: 'client1',
        password: 'client1',
        email: 'o.onaite@gmail.com',
        gender: '2',
        firstname: 'Ona',
        lastname: 'Onaitė',
        birthday: '1992-01-01',
    }
];

export function findUser(username, password) {
    return users.find(u => u.username === username && u.password === password);
}

export function addUser(userData) {
    const existingUsername = users.find(u => u.username === userData.username);
    if(existingUsername) return 'Username already taken';

    const newUserId = users.length;
    userData.id = newUserId;
    users.push(userData);
}

export function changeUser(currUser, changes){
    let user = users.find(u => u.id === currUser.id);
    if (!user)
        return;

    let index = users.indexOf(user);
    if (index === -1)
        return;

    users[index] = {
        ...user,
        ...changes,
    }
}

export function getUserById(id) {
    return users.find(u => u.id === id);
}
