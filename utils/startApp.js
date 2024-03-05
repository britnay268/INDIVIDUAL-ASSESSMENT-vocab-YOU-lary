import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';

const startApp = () => {
  domBuilder();
  // DOM EVENTS GO HERE
  // FORM EVENTS GO HERE
  navBar();
  logoutButton();
  // NAVBAR EVENTLISTENERS GO HERE

  // Put the cards on the DOM on app load
};

export default startApp;
