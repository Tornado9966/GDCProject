import { get } from './index';

export function getTables(restId) {
    const url = `/tables/${restId}`;
    return get(url);
}
