import { getLanguage, getLanguageWithoutUid } from './languageData';
import { getVocab, getVocabWithoutUid } from './vocabData';

const getCombinedVocab = async (uid) => {
  const vocabWithoutUid = await getVocabWithoutUid();
  const vocabWithUid = await getVocab(uid);
  return [...vocabWithoutUid, ...vocabWithUid];
};

const getCombinedLanguage = async (uid) => {
  const languageWithoutUid = await getLanguageWithoutUid();
  const languageWithUid = await getLanguage(uid);
  return [...languageWithoutUid, ...languageWithUid];
};

const searchVocab = async (searchValue, uid) => {
  const allVocab = await getCombinedVocab(uid);

  const filteredVocab = allVocab.filter((vocab) => (
    vocab.title.toLowerCase().includes(searchValue)
    || vocab.definition.toLowerCase().includes(searchValue)
  ));

  return { vocab: filteredVocab };
};
export { getCombinedVocab, searchVocab, getCombinedLanguage };
