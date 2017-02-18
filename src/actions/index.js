export const CREATE_CLIENT = 'CREATE_CLIENT';
export const FETCH_ClIENTS = 'FETCH_CLIENTS';

let idNum = 0;

export function createClient() {
  let newClient = {
    id: idNum++,
    name: '',
    description: '',
    phoneNum: '',
    date: new Date(),
    timezone: (new Date()).getTimezoneOffset()/60,
    adult: false
  }
  // let clientData = {
    // id: 1,
    // name: 'Ihnat',
    // description: 'What to by bicle',
    // phoneNum: +375295454545,
    // date: new Date(),
    // timezone: +2,
    // adult: true
  // }

  return {
    type: CREATE_CLIENT,
    payload: newClient
  }
}

export function fetchClients() {
  let clients = localStorage.getItem('clients') || [];
  return {
    type: FETCH_ClIENTS,
    payload: clients
  }
}
