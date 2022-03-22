import { useEffect, useState } from 'react';
import './App.scss';
import FormContainer from './components/FormContainer';
import LoadingModal from './components/LoadingModal'
import QuotesContainer from './components/QuotesContainer';
import FormContextProvider from './context/FormContext';
import { getFormData } from './server/FormManager';


function App() {

  const [formData, setFormData] = useState(null)
  const [quotesData, setQuotesData] = useState(null)


  useEffect(() => {

    if (!formData) {
      getFormData()
        .then(data => {
          if (data)
            setFormData(data)
        })
    }
  }, [formData, quotesData]);


  let content = <LoadingModal />
  if (formData) content = <FormContainer formData={formData} setQuotesData={setQuotesData} />
  if (quotesData) content = <QuotesContainer quotesData={quotesData} />

  return (
    <FormContextProvider>
      <div id="app-container">
        {content}
      </div>
    </FormContextProvider>
  );
}

export default App;
