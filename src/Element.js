import React from 'react'
import Input from './components/Input'
import Select from './components/Select'
import Checkbox from './components/Checkbox'

const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value,field_options} }) => {

switch (field_type) {
case 'LongText':
return (
<Input
field_id={field_id}
field_label={field_label}
field_placeholder={field_placeholder}
field_value={field_value}
/>);
case 'select':
return (
<Select
field_id={field_id}
field_label={field_label}
field_type={field_type}
field_options={field_options}
field_value={field_value}
/>
)
case 'checkbox':
return (<Checkbox
    field_id={field_id}
    field_label={field_label}
    field_type={field_type}
    field_value={field_value}
/>)
default:
return null;
}
}
export default Element;