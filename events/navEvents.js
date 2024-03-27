import { getCombinedVocab, searchVocab } from '../api/mergedData';
import { getVocabWithoutUid } from '../api/vocabData';
// import { getVocab } from '../api/vocabData';
import addLanguageOp from '../components/forms/addLanguage';
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
    getCombinedVocab(uid).then((vocab) => showVocab(vocab, uid));
  });

  document.querySelector('#search-Vocab').addEventListener('submit', () => {
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

  document.querySelector('#language-option').addEventListener('click', () => {
    addLanguageOp();
    document.querySelector('.navbar-toggler').click();
  });

  document.querySelector('#community').addEventListener('click', () => {
    getVocabWithoutUid().then((vocab) => showVocab(vocab, uid));
  });
};

export default navEvents;
