import { createVocab, getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#container').addEventListener('submit', (e) => {
    if (e.target.id.includes('update-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_id: document.querySelector('#language_id').value,
        timeSubmitted: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        firebaseKey,
        uid,
      };

      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocab(vocab, uid));
      });
    }

    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_id: document.querySelector('#language_id').value,
        timeSubmitted: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        uid,
      };

      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      });
    }
  });
};

export default formEvents;
