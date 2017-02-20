export const CREATE_CLIENT = 'CREATE_CLIENT';
export const FETCH_ClIENTS = 'FETCH_CLIENTS';
export const UPDATE_CLIENT = 'UPDATE_CLIENT';
export const CREATE_HUNDRED_CLIENTS = 'CREATE_HUNDRED_CLIENTS';

import { v4 } from 'node-uuid';


export function createClient() {
  let newClient = {
    id: v4(),
    name: '',
    description: '',
    phone: '',
    date: '',
    timezone: 'Europe/Riga',
    adult: false
  }

  return {
    type: CREATE_CLIENT,
    payload: newClient
  }
}

export function createHundredClients() {
  let dummyList = [];
  for (let i = 0; i < 100; i++) {
    dummyList.push({
      id: v4(),
      name: '',
      description: '',
      phone: '',
      date: '',
      timezone: 'Europe/Riga',
      adult: false
    });
  }
  return {
    type: CREATE_HUNDRED_CLIENTS,
    payload: dummyList
  }
}

export function fetchClients() {
  let clients = [];
  return {
    type: FETCH_ClIENTS,
    payload: clients
  }
}

export function updateClient(client) {
  return {
    type: UPDATE_CLIENT,
    payload: client
  }
}
