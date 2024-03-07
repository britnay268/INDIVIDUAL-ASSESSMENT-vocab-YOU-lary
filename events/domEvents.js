import { deleteSingleVocab, getSingleVocab, getVocab } from '../api/vocabData';
import addVocabEntry from '../components/forms/addVocabEntry';
import showVocab from '../pages/vocab';

const domEvents = (uid) => {
  document.querySelector('#container').addEventListener('click', (e) => {
    if (e.target.id.includes('vocab-edit')) {
      // console.warn('CLICKED EDIT', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then(addVocabEntry);
    }
    if (e.target.id.includes('vocab-delete')) {
      console.warn('CLICKED DELETE');
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleVocab(firebaseKey).then(() => {
          getVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      }
    }
    if (e.target.id.includes('filter-html')) {
      console.warn('FILTERED by HTML');
    }
  });
};

export default domEvents;
