import { assign as _assign } from 'lodash';

import { crypting } from 'services/crypting';
import { usersRegistration } from 'services/http-client/users-registration';

const url = '/registration';

export const sendRegistrForm = (data) => {
    const configData = _assign({}, data, { password: crypting(data.password) });
    return usersRegistration(url, configData);
};