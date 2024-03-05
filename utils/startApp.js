import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
