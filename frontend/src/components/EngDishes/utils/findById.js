import { filter as _filter } from 'lodash';

export default function findById(id, array) {
    const filtered = _filter(array, 
      value => value._id === id); 
    return filtered.length ? filtered : false;
}