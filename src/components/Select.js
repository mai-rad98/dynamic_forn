import React, {useContext} from 'react'
import { FormContext } from '../FormContext'


const Select = ({ field_id, field_label, field_options }) => {
    const { handleChange } = useContext(FormContext);
return (
<div className="form-group">
<label htmlFor="exampleInputPassword1">{field_label}</label>
<select class="form-select" aria-label="Default select example">
  <option>select</option>
  {field_options.length > 0 && field_options.map((option, i) => <option value={option.option_label}>{option.option_label} </option>)}
 
</select>
</div>

)
}
export default Select;