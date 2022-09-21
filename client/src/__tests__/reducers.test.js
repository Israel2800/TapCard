import { reducer } from '../utils/reducers';
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

const initialState = {
  cards: [],
  majors: [{ name: 'CS' }],
  currentMajor: '1',
};

test('UPDATE_PRODUCTS', () => {
  let newState = reducer(initialState, {
    type: UPDATE_PRODUCTS,
    cards: [{}, {}]
  });

  expect(newState.cards.length).toBe(2);
  expect(initialState.cards.length).toBe(0);
});

test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    majors: [{}, {}]
  });

  expect(newState.majors.length).toBe(2);
  expect(initialState.majors.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentMajor: '2'
  });

  expect(newState.currentMajor).toBe('2');
  expect(initialState.currentMajor).toBe('1');
});