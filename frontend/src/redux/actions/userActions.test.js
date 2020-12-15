import { storeFactory } from 'redux/store/configureStore';
import { update, userActions } from './userActions';

describe('update user', () => {
    let store;
    
    beforeAll(() => {
        store = storeFactory();
    });

    it('should change user email', () => {
        store.dispatch(update({email: 'newtest@gmail.com'}));
        expect(store.getState().auth.email).toBe('newtest@gmail.com');
    });

    it('should add user info', ()  => {
        userActions.logout();
        expect(store.getState().user).toBe(null);
    });
});

