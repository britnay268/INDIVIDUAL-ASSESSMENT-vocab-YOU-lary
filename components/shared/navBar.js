import renderToDom from '../../utils/renderToDom';

const navBar = () => {
  const domStr = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand">Navbar</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" id="vocab-entry" style="">Create Vocab Card<span class="sr-only">(current)</span>
            </a>
          </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" style="margin-right: 20px">Search</button>
      </form>
      <span class="navbar-text">
          <div id="signoutBtn"></div>
      </span>
    </div>
   </nav>`;

  renderToDom('#navbar', domStr);
};

export default navBar;
