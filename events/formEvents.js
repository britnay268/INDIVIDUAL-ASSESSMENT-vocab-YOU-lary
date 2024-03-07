import { getVocab, updateVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const formEvents = (uid) => {
  document.querySelector('#container').addEventListener('submit', (e) => {
    if (e.target.id.includes('update-vocab')) {
      console.warn('Submit', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');

      const payload = {
        title: document.querySelector('#vocab-title').value,
        definition: document.querySelector('#vocab-definition').value,
        language_id: document.querySelector('#language_id').value,
        timeSubmitted: Date(Date.now),
        firebaseKey,
        uid
      };

      updateVocab(payload).then(() => {
        getVocab(uid).then((vocab) => showVocab(vocab, uid));
      });
    }
  });
};

export default formEvents;
