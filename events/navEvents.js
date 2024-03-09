import { getVocab, searchVocab } from '../api/vocabData';
import addVocabEntry from '../components/forms/addVocabEntry';
import showVocab from '../pages/vocab';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const navEvents = (uid) => {
  document.querySelector('#vocab-entry').addEventListener('click', () => {
    addVocabEntry({ uid });
    document.querySelector('.navbar-toggler').click();
  });

  document.querySelector('#logo').addEventListener('click', () => {
    getVocab(uid).then((vocab) => showVocab(vocab, uid));
  });

  document.querySelector('#searchVocab').addEventListener('submit', () => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    searchVocab(searchValue, uid).then(({ vocab }) => {
      if (vocab.length > 0) {
        clearDom();
        showVocab(vocab, uid);
      } else {
        clearDom();
        const domString = '<h1 style="margin-top: 20px;">No Results</h1>';
        renderToDom('#vocab-container', domString);
      }
    });

    document.querySelector('#search').value = '';
  });
};

export default navEvents;
