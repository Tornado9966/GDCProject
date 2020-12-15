import {post} from 'services/http-client/index';

const saveOrder = ( url, orderData) => {
  return post(url, orderData);
};

export default saveOrder;