import { get } from './index';

export function getFilteredDishes(filter, numberOfDishes, category) {
    const url = `/dishes/${filter}/${numberOfDishes}/${category}`;
    return get(url);
}
