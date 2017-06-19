import request from '../utils/request';

export async function loadCustomer() {
  return request('/mock/customer', { method: 'GET' });
}
