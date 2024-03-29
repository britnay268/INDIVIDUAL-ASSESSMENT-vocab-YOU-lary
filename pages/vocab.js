// import { getLanguage } from '../api/languageData';
import { getCombinedLanguage } from '../api/mergedData';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

// SHOWS The filter buttons and cards
// May need to change this because it will be a merged data set to get language
const showVocab = async (array, uid) => {
  clearDom();

  let domStr = '';
  const languages = await getCombinedLanguage(uid);

  let filterBtnStr = `
  <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        FILTER by Language
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#" id="all-vocabCards">All</a></li>`;

  // For each lang in the languages array, it generates a HTML button string with the language name and firebase key in the id.
  filterBtnStr += languages.map((lang) => `
  <li><a class="dropdown-item" href="#" id="filter-btn--${lang.firebaseKey}">${lang.language}</a></li>`).join(' ');

  filterBtnStr += `</ul>
  </div>`;
  renderToDom('#filterBtns', filterBtnStr);

  if (array.length) {
    array.forEach((item) => {
      const singleLang = languages.find((lang) => lang.firebaseKey === item.language_id);
      domStr += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Language: ${singleLang ? singleLang.language : 'Unknown'}</h6>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link" id="vocab-edit--${item.firebaseKey}">Edit</a>
          <a href="#" class="card-link" id="vocab-delete--${item.firebaseKey}">Delete</a>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked--${item.firebaseKey}" style="margin-left: 60px;" ${item.uid ? 'checked' : ''}>
            <label class="form-check-label" for="flexSwitchCheckChecked" id="flexSwitchCheckChecked--${item.firebaseKey}" style="margin-left: -90px;">Private</label>
          </div>
      </div>`;
    });
  } else {
    domStr += '<h1>There are no cards</h1>';
  }

  renderToDom('#vocab-container', domStr);
};

export default showVocab;
