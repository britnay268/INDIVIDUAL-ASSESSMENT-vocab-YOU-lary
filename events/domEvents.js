import {
  deleteSingleVocab, getSingleVocab, getVocab
} from '../api/vocabData';
import addVocabEntry from '../components/forms/addVocabEntry';
import filteredVocab from '../pages/filteredvoacb';
import showVocab from '../pages/vocab';

const domEvents = (uid) => {
  document.querySelector('#container').addEventListener('click', async (e) => {
    if (e.target.id.includes('vocab-edit')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then(addVocabEntry);
    }

    if (e.target.id.includes('vocab-delete')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleVocab(firebaseKey).then(() => {
          getVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      }
    }

    if (e.target.id.includes('filter-html')) {
      filteredVocab(uid, '-Ns-cIa2fLmA4nK13rHy');
    }

    if (e.target.id.includes('filter-css')) {
      filteredVocab(uid, '-Ns-cIa2fLmA4nK13rHz');
    }

    if (e.target.id.includes('filter-js')) {
      filteredVocab(uid, '-Ns-cIa3W_M2cC-21sIw');
    }

    if (e.target.id.includes('filter-py')) {
      filteredVocab(uid, '-Ns-cIa3W_M2cC-21sIx');
    }

    if (e.target.id.includes('all-vocabCards')) {
      getVocab(uid).then((vocab) => showVocab(vocab, uid));
    }
  });
};

export default domEvents;
