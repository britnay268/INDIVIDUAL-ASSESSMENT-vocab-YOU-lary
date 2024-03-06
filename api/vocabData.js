import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: Get Vocab
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
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

// TODO: Create Vocab

// TODO: Update Voacb
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { getVocab, updateVocab };
