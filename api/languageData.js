import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: Get Vocab
const getLanguageWithoutUid = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        const newData = Object.values(data).filter((item) => item.uid === undefined || item.uid === '');
        resolve(newData);
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getLanguage = (uid) => new Promise((resolve, reject) => {
  let url = `${endpoint}/language.json`;
  // If uid is provided, fetch data for that uid
  if (uid) {
    url += `?orderBy="uid"&equalTo="${uid}"`;
  }

  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// TODO: Delete Vocab

// TODO: Get a Single Vocab

// TODO: Create Language
const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: Update Language
const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/language/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getLanguage, createLanguage, updateLanguage, getLanguageWithoutUid
};
