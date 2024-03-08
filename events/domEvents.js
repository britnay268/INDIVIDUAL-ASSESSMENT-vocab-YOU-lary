// import getLanguage from '../api/languageData';
// import getLanguage from '../api/languageData';
import getLanguage from '../api/languageData';
import {
  deleteSingleVocab, getSingleVocab, getVocab
} from '../api/vocabData';
import addVocabEntry from '../components/forms/addVocabEntry';
import showVocab from '../pages/vocab';
import renderToDom from '../utils/renderToDom';

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
      const vocabs = await getVocab(uid);
      let domStr = '';
      const languages = await getLanguage(uid);

      vocabs.forEach(async (item) => {
        if (item.language_id === '-Ns-cIa2fLmA4nK13rHy') {
          const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
          domStr += `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${singleLang.language}</h6>
            <p class="card-text">${item.definition}</p>
            <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
            <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
          </div>
          </div>`;
        }
      });
      renderToDom('#vocab-container', domStr);
    }

    if (e.target.id.includes('filter-css')) {
      const vocabs = await getVocab(uid);
      let domStr = '';
      const languages = await getLanguage(uid);

      vocabs.forEach(async (item) => {
        if (item.language_id === '-Ns-cIa2fLmA4nK13rHz') {
          const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
          domStr += `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${singleLang.language}</h6>
            <p class="card-text">${item.definition}</p>
            <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
            <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
          </div>
          </div>`;
        }
      });
      renderToDom('#vocab-container', domStr);
    }

    if (e.target.id.includes('filter-js')) {
      const vocabs = await getVocab(uid);
      let domStr = '';
      const languages = await getLanguage(uid);

      vocabs.forEach(async (item) => {
        if (item.language_id === '-Ns-cIa3W_M2cC-21sIw') {
          const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
          domStr += `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${singleLang.language}</h6>
            <p class="card-text">${item.definition}</p>
            <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
            <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
          </div>
          </div>`;
        }
      });
      renderToDom('#vocab-container', domStr);
    }

    if (e.target.id.includes('filter-py')) {
      const vocabs = await getVocab(uid);
      let domStr = '';
      const languages = await getLanguage(uid);

      vocabs.forEach(async (item) => {
        if (item.language_id === '-Ns-cIa3W_M2cC-21sIx') {
          const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
          domStr += `
          <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${singleLang.language}</h6>
            <p class="card-text">${item.definition}</p>
            <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
            <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
          </div>
          </div>`;
        }
      });
      renderToDom('#vocab-container', domStr);
    }

    if (e.target.id.includes('all-vocabCards')) {
      getVocab(uid).then((vocab) => showVocab(vocab, uid));
    }
  });
};

export default domEvents;
