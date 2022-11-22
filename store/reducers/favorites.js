
export default function Favorites(state = {}, action) {
   switch(action.type) {
      case 'GET_USER_FAVORITES':
         return { ...state, favorites: action.payload};
      default:
         return state;
   }
}