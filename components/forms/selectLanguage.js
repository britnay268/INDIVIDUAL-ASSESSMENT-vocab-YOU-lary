// import { getLanguage } from '../../api/languageData';
import { getCombinedLanguage } from '../../api/mergedData';
import renderToDom from '../../utils/renderToDom';

const selectLanguage = (uid, languageID) => {
  let domStr = `<label for="language">Select Language</label>
  <select class="form-control" id="language_id" required>
  <option value="">Select Language</option>`;

  getCombinedLanguage(uid).then((languageArray) => {
    languageArray.forEach((language) => {
      domStr += `
      <option 
            value="${language.firebaseKey}" 
            ${languageID === language.firebaseKey ? 'selected' : ''}>
              ${language.language} 
          </option>`;
    });

    domStr += '</select>';

    renderToDom('#select-language', domStr);
  });
};

export default selectLanguage;
