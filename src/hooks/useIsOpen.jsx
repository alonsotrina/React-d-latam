import { useState } from 'react';

function useIsOpen() {
  const [state, setState] = useState({
    dialogOpen: false,
    dropdownOpen: false,
    showPassword: false,
  });

  const toggle = (key) => {
    setState((prevState)=>({
      ...prevState,
      [key]: !prevState[key]

    }))
  };
  
  return { state, toggle };
}

export default useIsOpen;