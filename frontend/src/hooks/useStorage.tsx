import { useState, useEffect } from "react";

const useStorage = (name:string): [v:any, s:(s:any)=>void, d:()=>void] => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const data = JSON.parse( localStorage.getItem(name) || "null" )
    setValue(data);
  }, [name]);

  const setData = (value:string) => {
    const data = JSON.stringify(value)
    localStorage.setItem(name, data)
  };

  const deleteData = () => {
    localStorage.removeItem(name)
  };

  return [value, setData, deleteData];
};
 export default useStorage;