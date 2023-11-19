import { useState } from "react"

const useForm = ( initialState = {} ) => {

  const [ formState, setFormState ] = useState( initialState );

  const onInputChange = ( {target} ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onFormReset = () => {
    setFormState = initialState;
  }

  return {
    ...formState,
    onInputChange,
    onFormReset,
  }

}

export { useForm }