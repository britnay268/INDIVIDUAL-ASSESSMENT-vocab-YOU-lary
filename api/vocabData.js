import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: Get Vocab
const getVocabWithoutUid = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
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

const getVocab = (uid) => new Promise((resolve, reject) => {
  let url = `${endpoint}/vocab.json`;
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
const deleteSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// TODO: Get a Single Vocab
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

// TODO: Create Vocab
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
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

// TODO: Update Voacb
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
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

const getVocabByLanguageID = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="language_id"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.warn(data);
      const languageID = Object.values(data).filter((item) => item.language_id);
      resolve(languageID);
    })
    .catch(reject);
});

export {
  getVocab, updateVocab, getSingleVocab, deleteSingleVocab, createVocab, getVocabByLanguageID, getVocabWithoutUid
};
