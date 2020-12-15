import {get} from './index';

export function getSpecialOffers() {
    const url = '/offers';
    return get(url);
}
