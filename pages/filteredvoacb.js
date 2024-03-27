// import { getLanguage } from '../api/languageData';
import { getCombinedLanguage, getCombinedVocab } from '../api/mergedData';
// import { getVocab } from '../api/vocabData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

// SHOWS The filter buttons and cards
// May need to change this because it will be a merged data set to get language
const filteredVocab = async (uid, languageID) => {
  clearDom();

  let domStr = '';
  const languages = await getCombinedLanguage(uid);
  const vocabs = await getCombinedVocab(uid);

  let filterBtnStr = '<button type="button" class="btn btn-outline-dark" id="all-vocabCards">All</button>';
  filterBtnStr += languages.map((lang) => `<button type="button" class="btn btn-outline-dark" id="filter-btn--${lang.firebaseKey}">${lang.language}</button>`).join(' ');
  renderToDom('#filterBtns', filterBtnStr);

  // Keeps track of whether aany cards matching thr language ID is found
  let cardsFound = false;

  vocabs.forEach(async (item) => {
    if (item.language_id === languageID) {
      const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
      domStr += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${singleLang.language}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
        <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="publicCard" ${item.uid ? 'checked' : ''}>
          <label class="form-check-label" for="public" style="margin-left: -180px;">Private</label>
        </div>
      </div>
      </div>`;
      // cards found is true when the itemlanguage_id is equal to languageID
      cardsFound = true;
    }
  });
  // not cards found which means if itemlanguage_id is not equal to languageID, then this is true and runs
  if (!cardsFound) {
    domStr = '<h2>There are no cards under this language</h2>';
  }
  renderToDom('#vocab-container', domStr);
};

export default filteredVocab;
