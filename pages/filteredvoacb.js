import { getLanguage } from '../api/languageData';
import { getVocab } from '../api/vocabData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

// SHOWS The filter buttons and cards
// May need to change this because it will be a merged data set to get language
const filteredVocab = async (uid, languageID) => {
  clearDom();

  let domStr = '';
  const languages = await getLanguage(uid);
  const vocabs = await getVocab(uid);

  let filterBtnStr = '<button type="button" class="btn btn-outline-dark" id="all-vocabCards">All</button>';
  filterBtnStr += languages.map((lang) => `<button type="button" class="btn btn-outline-dark" id="filter-btn--${lang.firebaseKey}">${lang.language}</button>`).join(' ');
  renderToDom('#filterBtns', filterBtnStr);

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
      </div>
      </div>`;
    }
  });
  renderToDom('#vocab-container', domStr);
};

export default filteredVocab;
