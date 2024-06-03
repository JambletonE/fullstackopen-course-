
import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl)
    return request.then(response => response.data);
};

const create = async newObject => {
  const request = axios.post(baseUrl, newObject)
  const response = await request;
  return response.data;
}
const removeOne = (id) => {
  const request = axios.delete(baseUrl+`/${id}`)
  return request.then(response => response.data)
};

const replace = (oldObject, newObject) => {

  const request = axios.put(baseUrl+`/${oldObject.id}`, newObject);
  return request.then(response => response.data);
};




export default { getAll, create, removeOne, replace};
