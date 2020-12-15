import { get } from 'services/http-client/index';

export function getPlaces() {
    return get('/places');
}