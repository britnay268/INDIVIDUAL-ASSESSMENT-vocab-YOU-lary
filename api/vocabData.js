import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: Get Vocab
const getVocab = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.warn(data);
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

export default getVocab;
