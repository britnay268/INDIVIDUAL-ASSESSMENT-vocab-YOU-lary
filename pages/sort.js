import renderToDom from '../utils/renderToDom';

const featureSort = () => {
  const domStr = `
  <div class="dropdown" id="feature-sort">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    FEATURE: SORT
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#" id="alphabetically">Alphabetically</a></li>
    <li><a class="dropdown-item" href="#" id="oldest">Oldest</a></li>
    <li><a class="dropdown-item" href="#" id="newest">Newest</a></li>
  </ul>
  </div>`;

  renderToDom('#sort-entries', domStr);
};

export default featureSort;
