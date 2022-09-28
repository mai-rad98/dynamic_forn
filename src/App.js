
import React from 'react'
import formJSON from './formElement.json'
import  { useState, useEffect } from 'react'
import Element from './Element'
import { FormContext } from './FormContext'

console.log('formJSON',formJSON);


function App() {
     
const [elements, setElements] = useState(null);

const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements)
  }
  const handleChangeInput = ()=>{
  console.log('handle change input')
  }

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }


      }
      setElements(newElements)
    });
    console.log(elements)
  }

  


useEffect(()=>{
setElements(formJSON[0])
},[])
const {fields,page_label} = elements??{}




  return (

    <FormContext.Provider value={{handleChange}}>
    <div className="container">
      <h3>{page_label}</h3>
<form>
{fields ? fields.map((field, i) => <div key={i}><Element field={field} /><p></p></div>) : null}

<button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>


</form>
</div>
</FormContext.Provider>
  );
}

export default App;
