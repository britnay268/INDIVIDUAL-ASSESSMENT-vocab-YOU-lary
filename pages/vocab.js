import { getLanguage } from '../api/languageData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

// SHOWS The filter buttons and cards
// May need to change this because it will be a merged data set to get language
const showVocab = async (array, uid) => {
  clearDom();

  let domStr = '';
  const languages = await getLanguage(uid);

  let filterBtnStr = '<button type="button" class="btn btn-outline-dark" id="all-vocabCards">All</button>';

  // For each lang in the languages array, it generates a HTML button string with the language name and firebase key in the id.
  filterBtnStr += languages.map((lang) => `<button type="button" class="btn btn-outline-dark" id="filter-btn--${lang.firebaseKey}">${lang.language}</button>`).join(' ');
  renderToDom('#filterBtns', filterBtnStr);

  array.forEach((item) => {
    const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
    domStr += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Language: ${singleLang.language}</h6>
        <p class="card-text">${item.definition}</p>
        <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
        <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
      </div>
    </div>`;
  });

  renderToDom('#vocab-container', domStr);
};

export default showVocab;
