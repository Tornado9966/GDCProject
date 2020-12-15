import { post } from 'services/http-client';

export function sendUserInfo(userEmail) {
    return post('/myorders', { userEmail });
}

export function sendUserRatingDish(dishesList, userEmail) {
    const { showDetailsList, ...rest } = dishesList;
    const usersRatingDish = { ...rest, userEmail };
    return post('/rating', usersRatingDish);
}
