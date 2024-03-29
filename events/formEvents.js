import { createLanguage, updateLanguage } from '../api/languageData';
import { getCombinedVocab } from '../api/mergedData';
import {
  createVocab, updateVocab
} from '../api/vocabData';
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
        getCombinedVocab(uid).then((vocab) => showVocab(vocab, uid));
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
          getCombinedVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      });
    }

    if (e.target.id.includes('submit-language')) {
      const payload = {
        language: document.querySelector('#language').value,
        uid,
      };

      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLanguage(patchPayload).then(() => {
          getCombinedVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      });
    }
  });
};

export default formEvents;
