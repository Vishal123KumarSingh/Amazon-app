export const initialState = {
  basket: [],
  user: null,
};

//Selectors.

// The Work of the function getTotalValue is to , calculate total value of the items present in basket.
// For doing that is is using "reduce function" and reduce function is using 'map' for adding the price of every item in basket.
// Here amount is amount of currently added item, 0 is inintial value
export const getTotalValue = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // This is wrong method to delete , because it will delete all the item with same id, and we don't want that.
    // case "REMOVE_FROM_BASKET":
    //   console.log("Entered Here Sir");
    //   return {
    //     ...state,
    //     basket: state.basket.filter((item) => item.id !== action.id),
    //   };

    case "REMOVE_FROM_BASKET":
      // Firstly find the index , which you want to delete.
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          "This item with id : (${action.id}) is not present in the basket"
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
