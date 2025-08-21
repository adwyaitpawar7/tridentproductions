import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  isLoading: false,
  currentSection: 'home',
  contactForm: {
    name: '',
    email: '',
    message: '',
    errors: {}
  },
  menuOpen: false,
  theme: 'dark'
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_CURRENT_SECTION':
      return { ...state, currentSection: action.payload };
    case 'UPDATE_CONTACT_FORM':
      return { 
        ...state, 
        contactForm: { ...state.contactForm, ...action.payload }
      };
    case 'TOGGLE_MENU':
      return { ...state, menuOpen: !state.menuOpen };
    case 'SET_MENU':
      return { ...state, menuOpen: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

