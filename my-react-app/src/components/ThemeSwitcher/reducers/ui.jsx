import { SWITCH_THEME } from '../actions/ui';

const initialState = {
  theme: 'light',
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
}