import { createSlice } from '@reduxjs/toolkit';

const items = [
  'angular2',
  'vue',
  'react',
  'grunt',
  'phantomjs',
  'ember',

];
let duplicatedItems = [];
let randomizedItem = [];
let finalizedItems = [];

const start = () => {
  duplicatedItems = items.concat(items);
  randomizedItem = shuffle(duplicatedItems);

  finalizedItems = randomizedItem.map((name, i) => {
    return {
      name,
      index: i,
      close: true,
      complete: false,
      fail: false,
    };
  });
};

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

start();

const scores = localStorage.getItem("scores")

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    items: finalizedItems,
    openedItems: [],
    moveCount: 0
  },
  reducers: {
    handleClick: (state, action) => {
      const { name, index } = action.payload;
      const item = { name, index };
      state.openedItems.push(item);
      state.items[index].close = false;

    },
    check: (state, action) => {
      if (state.openedItems.length === 2) {
        if (
          state.openedItems[0].name === state.openedItems[1].name &&
          state.openedItems[0].index !== state.openedItems[1].index
        ) {
          state.items[state.openedItems[0].index].complete = true;
          state.items[state.openedItems[1].index].complete = true;
          if (state.items.every(item => item.complete)) {
            if (scores) {
              scores.split("").sort((a, b) => a - b)
              if (scores[0] > state.moveCount) {
                alert("Congralations you won with " + state.moveCount + " moves and this is your best score!")
              }
              localStorage.setItem("scores", [scores, state.moveCount])
            } else {
              localStorage.setItem("scores", state.moveCount)
              alert("Congralations you won with " + state.moveCount + " moves and this is your best score!")
            }
          }
        } else {
          state.items[state.openedItems[0].index].close = true;
          state.items[state.openedItems[1].index].close = true;
        }
        state.openedItems = [];
      }
    },
    closeCard: (state, action) => {
      state.items.map(e => {
        if (!e.complete) {
          e.close = true;
        }
        return e
      })
    },
    restart: (state, action) => {
      start();
      state.moveCount = 0
      state.items = finalizedItems;
    },
    move: (state, action) => {
      state.moveCount += 1;
    }
  },
});

export const { check, handleClick, closeCard, move, restart } = cardsSlice.actions;

export default cardsSlice.reducer;
