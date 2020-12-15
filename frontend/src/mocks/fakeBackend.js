import { endsWith as _endsWith, filter as _filter } from 'lodash';

export function fakeBackend(url, opts) {
    let users = [
        {
            id: 1, email: 'xx@xx.xx',
            password: 'Aymga2LNFrM+tnkr6MYLFY2Jou46h2/Omogeu0iMCRQ=',
            firstName: 'Test',
            lastName: 'User'
        },
        {
            id: 2,
            email: 'ifedorkiv@gmail.com',
            password: 'qwerty',
            firstName: 'Ihor',
            lastName: 'Fedorkiv'
        }
    ];
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (_endsWith(url, '/users/authenticate')) {

                let filteredUsers = _filter(users, user => {
                    return user.email === opts.email && user.password === opts.password;
                });

                if (filteredUsers.length) {
                    resolve({ ok: true });
                } else {
                    reject('Email or password is incorrect');
                }

                return;
            }
        }, 500);
    });
}