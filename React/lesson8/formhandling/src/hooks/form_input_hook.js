import { useState } from "react";

export default function useInputState(defaultValue){
    const [value,setValue] = useState(defaultValue);

    const handleInputData = (event) =>{
        setValue(event.target.value);
    }
  return [value,handleInputData];
}

