// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   totalItems: 0,
//   totalPrice: 0,
// };

// const basketSlice = createSlice({
//   name: "basket",
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//       let newItems = [...state.items];
//       const found = state.items.find(({ id }) => id === action.payload.id);
//       if (found) {
//         newItems = newItems.map((item) => {
//           return item.id === action.payload.id
//             ? { ...item, count: action.payload.count + item.count }
//             : item;
//         });
//       } else {
//         newItems.push(action.payload);
//       }
//       state.items = newItems;
//       state.totalItems += action.payload.count;
//       state.totalPrice = newItems.reduce((acc, val) => acc + (val.price * val.count), 0).toFixed(2);    },
//     removeItemFromCart: (state, action) => {
//       const removedItem = state.items.find(({ id }) => id === action.payload);
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//       state.totalItems -= removedItem.count;
//       state.totalPrice -= removedItem.count * removedItem.price;
//     },
//     increaseItemCount: (state, action) => {
//       state.items = state.items.map((item) =>
//         parseInt(item.id) === action.payload
//           ? { ...item, count: item.count + 1 }
//           : item
//       );
//       state.totalItems += 1;
//       state.totalPrice = state.items.reduce((acc, val) => acc + (val.price * val.count), 0);
//     },
//     decreaseItemCount: (state, action) => {
//       const decreasedItem = state.items.find(({ id }) => id === action.payload);
//       state.items = state.items.map((item) =>
//         parseInt(item.id) === action.payload && item.count > 1
//           ? { ...item, count: item.count - 1 }
//           : item
//       );
//       state.totalItems -= 1;
//       state.totalPrice -= decreasedItem.price;
//     },
//   //   updateTotalPrice: (state, action) => {
//   //     state.totalPrice = action.payload;
//   // },
// }
// });

// export const { addItemToCart, removeItemFromCart, increaseItemCount, decreaseItemCount
//   // , updateTotalPrice
// } = basketSlice.actions;
// export default basketSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   totalItems: 0,
//   totalPrice: 0,
// };

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//       let newItems = [...state.items];
//       const found = state.items.find(({ id }) => id === action.payload.id);
//       if (found) {
//         newItems = newItems.map((item) => {
//           return item.id === action.payload.id ? { ...item, count: action.payload.count + item.count } : item;
//         });
//       } else {
//         newItems.push(action.payload);
//       }
//       state.items = newItems;
//       state.totalItems += action.payload.count;
//       state.totalPrice = newItems.reduce((acc, val) => acc + (val.price * val.count), 0);
//     },
//     removeItemFromCart: (state, action) => {
//       const removedItem = state.items.find(({ id }) => id === action.payload);
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//       state.totalItems -= removedItem.count;
//       state.totalPrice -= removedItem.count * removedItem.price;
//     },
//     increaseItemCount: (state, action) => {
//       state.items = state.items.map((item) => parseInt(item.id) === action.payload ? { ...item, count: item.count + 1 } : item);
//       state.totalItems += 1;
//       state.totalPrice = state.items.reduce((acc, val) => acc + (val.price * val.count), 0);
//     },
//     decreaseItemCount: (state, action) => {
//       const decreasedItem = state.items.find(({ id }) => id === action.payload);
//       state.items = state.items.map((item) => parseInt(item.id) === action.payload && item.count > 1 ? { ...item, count: item.count - 1 } : item);
//       state.totalItems -= 1;
//       state.totalPrice -= decreasedItem.price;
//     },
//   }
// });

// export const { addItemToCart, removeItemFromCart, increaseItemCount, decreaseItemCount } = basketSlice.actions;
// export default basketSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// нужно чтобы в компоненте basketForm через редьюсер происходил подсчет количества всех выбранных товаров

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}; 

const basketSlice = createSlice({
name: 'basket',
initialState,
reducers: {
addItemToCart: (state, action) => {
let newItems = [...state.items];
const found = state.items.find(({ id }) => id === action.payload.id);
if (found) {
newItems = newItems.map((item) => {
return item.id === action.payload.id ? { ...item, count: action.payload.count + item.count } : item;
});
} else newItems.push(action.payload);
state.items = newItems;
state.totalItems += action.payload.count;
},
removeItemFromCart: (state, action) => {
state.items = state.items.filter(({ id }) => id !== action.payload);
},
increaseItemCount: (state, action) => {
state.items = state.items.map((item) => parseInt(item.id) === action.payload ? { ...item, count: item.count + 1 } : item);
state.totalItems += 1;
},
decreaseItemCount: (state, action) => {
  const itemToDecrease = state.items.find((item) => parseInt(item.id) === action.payload);
  if (itemToDecrease && itemToDecrease.count > 1) { // Проверяем, что количество больше 1
    state.items = state.items.map((item) => {
      if (parseInt(item.id) === action.payload) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    // уменьшаем общее количество товаров
    state.totalItems -= 1;
  }
},
increaseTotalPrice: (state, action) => {
  let item = state.items.find((item) => item.id === action.payload);
  state.totalItems += item.count * item.price;
},
decreaseTotalPrice: (state, action) => {
  let item = state.items.find((item) => item.id === action.payload);
  state.totalItems -= item.count * item.price;
},
}
});

export const { addItemToCart, removeItemFromCart, increaseItemCount, decreaseItemCount, 
  // increaseTotalPrice, decreaseTotalPrice, removeFromTotalPrice 
} = basketSlice.actions;
export default basketSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
// };

// const basketSlice = createSlice({
//   name: 'basket',
//   initialState,
//   reducers: {
//     addItemToCart: (state, action) => {
//       let newItems = [...state.items];
//       const found = state.items.find(({ id }) => id === action.payload.id);

//       if (found) {
//         newItems = newItems.map((item) => {
//           return item.id === action.payload.id
//             ? { ...item, count: action.payload.count + item.count }
//             : item;
//         });
//       } else newItems.push(action.payload);
      
//       state.items = newItems;
//     },
//     removeItemFromCart: (state, action) => {
//       console.log('remove');
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//     increaseItemCount: (state, action) => {
//       console.log('inc');
//       console.log(action.payload);
//       state.items = state.items.map((item) =>
//         parseInt(item.id) === action.payload ? { ...item, count: item.count + 1 } : item
//       );
//     },
//     decreaseItemCount: (state, action) => {
//       console.log('dec');
//       state.items = state.items.map((item) =>
//         parseInt(item.id) === action.payload && item.count > 1
//           ? { ...item, count: item.count - 1 }
//           : item
//       );
//     },
//   }
// });

// export const { addItemToCart, removeItemFromCart, increaseItemCount, decreaseItemCount } = basketSlice.actions;
// export default basketSlice.reducer;