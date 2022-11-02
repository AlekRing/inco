import { put, takeEvery } from 'redux-saga/effects';

// function* getTwoCards(deck_id) {
//   try {
//     const resCard = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`);
//     const data = yield resCard.json();

//     yield put(addCards(data.cards));
//   } catch (error) {
//     console.error('Fetching cards error: ', error);
//   }
// }

function* shakeCards() {
  try {
    const res: string = yield fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    // const { deck_id } = yield res.json();

    // yield getTwoCards(deck_id);
  } catch (error) {
    console.error(error);
  }
}

export default function* userSaga() {
  yield takeEvery('startShake', shakeCards);
}