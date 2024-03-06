import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domStr = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
  <div class="container-fluid">
      <a class="navbar-brand title" href="#" id="logo">vocab-YOU-lary</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0"
          <li class="nav-item">
            <a class="nav-link" href="#" id="sale-books">Create Vocab Card</a>
          </li>
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit" style="margin-right: 20px">Search</button>
          </form>
          </li>
        </ul>
        <span class="navbar-text">
          <div id="signoutBtn"></div>
        </span>
      </div>
      </div>
    </nav>`;

  renderToDom('#navbar', domStr);
};

export default navBar;
