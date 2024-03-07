import { getVocab } from '../api/vocabData';
import addVocabEntry from '../components/forms/addVocabEntry';
import showVocab from '../pages/vocab';

const navEvents = (uid) => {
  document.querySelector('#vocab-entry').addEventListener('click', () => {
    addVocabEntry({ uid });
    document.querySelector('.navbar-toggler').click();
  });

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });

  // document.querySelector('#vocab-entry').addEventListener('click', () => {
  //   addVocabEntry();
  // });
};

export default navEvents;
