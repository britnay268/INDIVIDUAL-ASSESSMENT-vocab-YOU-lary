// import { getVocab, updateVocab } from '../api/vocabData';
// import showVocab from '../pages/vocab';

const formEvents = () => {
  document.querySelector('#container').addEventListener('submit', (e) => {
    if (e.target.id.includes('update-vocab')) {
      console.warn('Submit', e.target.id);
      // const [, firebaseKey] = e.target.id.split('--');

      // const payload = {
      //   title: document.querySelector('#vocab-title').value,
      //   definition: document.querySelector('#vocab-definition').value,
      //   firebaseKey,
      //   uid
      // };

      // updateVocab(payload).then(() => {
      //   getVocab(uid).then(showVocab);
      // });
    }
  });
};

export default formEvents;
