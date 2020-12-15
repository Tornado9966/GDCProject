import {getSpecialOffers} from '../../services/http-client/special-offers';

export function getSpecialOffersList(count) {
    return getSpecialOffers(count);
}
