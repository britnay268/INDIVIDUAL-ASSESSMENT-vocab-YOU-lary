import { getVocab } from '../api/vocabData';
import showVocab from '../pages/vocab';

const navEvents = (uid) => {
  document.querySelector('#vocab-entry').addEventListener('click', () => {
    console.warn('Clicked a Potential Form');
  });

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
};

export default navEvents;
