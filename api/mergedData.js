import { getVocab, getVocabWithoutUid } from './vocabData';

const getCombinedVocab = async (uid) => {
  const vocabWithUid = await getVocab(uid);
  const vocabWithoutUid = await getVocabWithoutUid();
  return [...vocabWithUid, ...vocabWithoutUid];
};

const searchVocab = async (searchValue, uid) => {
  const allVocab = await getCombinedVocab(uid);

  const filteredVocab = allVocab.filter((vocab) => (
    vocab.title.toLowerCase().includes(searchValue)
    || vocab.definition.toLowerCase().includes(searchValue)
  ));

  return { vocab: filteredVocab };
};
export { getCombinedVocab, searchVocab };
