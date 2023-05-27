import { useState } from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setinputValue] = useState()

  const onInputChange = ({target}) => {
    // console.log(target.value);
    setinputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    if(inputValue.trim().length <=1 ) return;

    // setCategories( categories  => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue('');
    //Callback el de arriba
  }

  return (
    <form onSubmit={ onSubmit } >
          <input  
            type="text" 
            placeholder="buscar.."
            value={inputValue}
            onChange={onInputChange}
          />
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}