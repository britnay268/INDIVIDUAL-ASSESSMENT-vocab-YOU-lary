import { getCombinedVocab } from '../api/mergedData';
import {
  deleteSingleVocab, getSingleVocab, updateVocab
} from '../api/vocabData';
import addVocabEntry from '../components/forms/addVocabEntry';
import filteredVocab from '../pages/filteredvoacb';
import showVocab from '../pages/vocab';

const domEvents = async (uid) => {
  // This is used to combine the vocab with uid and vocab without uid

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
          getCombinedVocab(uid).then((vocab) => showVocab(vocab, uid));
        });
      }
    }

    if (e.target.id.startsWith('filter-btn')) {
      const [, languageID] = e.target.id.split('--');
      filteredVocab(uid, languageID);
    }

    if (e.target.id.includes('all-vocabCards')) {
      getCombinedVocab(uid).then((vocab) => showVocab(vocab, uid));
    }

    if (e.target.id.includes('alphabetically')) {
      // const vocab = await getVocab(uid);

      // getCombinedVocab().sort((a, b) => a.title.localeCompare(b.title));
      // showVocab(getCombinedVocab, uid);

      getCombinedVocab(uid).then((combinedVocab) => {
        // Sort the combined vocabulary data
        combinedVocab.sort((a, b) => a.title.localeCompare(b.title));
        // Show the sorted data
        showVocab(combinedVocab, uid);
      });
    }

    if (e.target.id.includes('oldest')) {
      // const vocab = await getVocab(uid);
      // vocab.sort((a, b) => a.timeSubmitted.localeCompare(b.timeSubmitted));
      // showVocab(vocab, uid);

      getCombinedVocab(uid).then((combinedVocab) => {
        combinedVocab.sort((a, b) => a.timeSubmitted.localeCompare(b.timeSubmitted));
        showVocab(combinedVocab, uid);
      });
    }

    if (e.target.id.includes('newest')) {
      // const vocab = await getVocab(uid);
      // vocab.sort((a, b) => b.timeSubmitted.localeCompare(a.timeSubmitted));
      // showVocab(vocab, uid);
      getCombinedVocab(uid).then((combinedVocab) => {
        combinedVocab.sort((a, b) => b.timeSubmitted.localeCompare(a.timeSubmitted));
        showVocab(combinedVocab, uid);
      });
    }

    if (e.target.id.includes('flexSwitchCheckChecked')) {
      const [, cardFirebaseKey] = e.target.id.split('--');

      const vocabulary = await getCombinedVocab();

      // Searchs vocab to see if the there is a firebaskey that matched the one associated to the card
      const cardFound = vocabulary.find((item) => item.firebaseKey === cardFirebaseKey);

      if (cardFound) {
        // if the toggle is checked
        if (e.target.checked) {
          // it adds the uid of the user to the card
          cardFound.uid = uid;
          updateVocab(cardFound);
          // console.warn(cardFound.uid);
        } else {
          // else if its not checked, it removes the uid from the card
          cardFound.uid = '';
          updateVocab(cardFound);
          // console.warn('Toggle off', uid);
        }
      }
    }
  });
};

export default domEvents;
