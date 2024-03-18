import { getVocab, getVocabWithoutUid } from '../api/vocabData';
import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import featureSort from '../pages/sort';
import showVocab from '../pages/vocab';
import showVocab2 from '../pages/vocab2';

const startApp = (uid) => {
  domBuilder();
  domEvents(uid); // DOM EVENTS GO HERE
  formEvents(uid); // FORM EVENTS GO HERE
  navBar();
  logoutButton();
  navEvents(uid); // NAVBAR EVENTLISTENERS GO HERE
  featureSort();

  // Put the cards on the DOM on app load
  // getVocab().then((vocab) => showVocab(vocab));
  // getVocab(uid).then((vocab) => showVocab(vocab, uid));
  // getVocabWithoutUid().then((vocab) => showVocab(vocab));

  Promise.all([getVocab(uid), getVocabWithoutUid()])
    .then(([vocabWithUid, vocabWithoutUid]) => {
      showVocab(vocabWithUid, uid);
      showVocab2(vocabWithoutUid);
    });
};

export default startApp;
