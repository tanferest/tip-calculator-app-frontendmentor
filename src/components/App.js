import '../styles/App.scss';
// Fichero src/components/App.js
import Header from './Header';
import Main from './Main';

import { useState } from 'react';


const App = () => {
  const [billValue, setBillValue] = useState('');
  const [hidden, setHidden] = useState('hidden');
  const [errorOutline, setErrorOutline] = useState('');
  
  
  const handleBillAmount = (ev) => {
      const inputValue = ev.target.value;
      const regex = /^[+]?([0-9]+(?:[.,][0-9]*)?|.,[0-9]+)$/;
      console.log(inputValue);
      if (regex.test(inputValue)) {
        setBillValue(inputValue);
        setHidden('hidden');
        setErrorOutline('');
      } else {
        setHidden('');
        setErrorOutline('error');
      }
  };


  return <>
    <Header />
    <Main handleBill={handleBillAmount} hidden={hidden} error={errorOutline} billValue={billValue} />
  </>;
};

export default App;