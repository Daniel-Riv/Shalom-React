import { useEffect } from 'react';
import { useReducer } from 'react';
import { CartContext } from './context/CartContext';
import { initialState, reducerCart } from './reducer/reducerCart';
import { AppRouter } from './router/AppRouter';



function App() {

  const [state, dispatch] = useReducer(reducerCart,initialState);

  useEffect(()=>{
    console.log(localStorage.getItem('cart') +'data de localstorage');
    dispatch({
      type:'SET_CART',
      payload: JSON.parse(localStorage.getItem('cart')) || []});
  },[]);

  useEffect(() => {
    console.log("guardoo",state);
    localStorage.setItem('cart',JSON.stringify(state.cart));
}, [state.cart]);

console.log(state)
  return (
    <CartContext.Provider value={{state,dispatch}}>
      <AppRouter />
    </CartContext.Provider>
  );
}

export default App;
