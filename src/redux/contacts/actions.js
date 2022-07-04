/* eslint-disable import/no-anonymous-default-export */
//import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('addContactRequest');
const addContactSuccess = createAction('addContactSuccess');
const addContactError = createAction('addContactError');

const deleteContactRequest = createAction('deleteContactRequest');
const deleteContactSuccess = createAction('deleteContactSuccess');
const deleteContactError = createAction('deleteContactError');

const fetchContactsRequest = createAction('fetchContactsRequest');
const fetchContactsSuccess = createAction('fetchContactsSuccess');
const fetchContactsError = createAction('fetchContactsError');

/*const addData = createAction('Add', value => ({
  payload: {
    id: nanoid(),
    name: value.name,
    number: value.number,
  },
}));*/

//const deleteData = createAction('Delete');

const changeFilter = createAction('ChangeFilter');

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  //  addData,
  //deleteData,
  changeFilter,
};
