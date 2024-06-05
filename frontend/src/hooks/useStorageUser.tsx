import { useState, useEffect } from "react";

const useStorageUser = (): [v:any, s:(s:any)=>void, d:()=>void] => {
  
  const [value, setValue] = useState<Usuario>();

  useEffect(() => {
    const user = JSON.parse( localStorage.getItem("user") || "null" )
    setValue(user);
  }, [value]);

  const setUser = (user:Usuario) => {
    const data = JSON.stringify(user)
    localStorage.setItem("user", data)
    setValue(user)
  };

  const deleteUser = () => {
    localStorage.removeItem("user")
    setValue(undefined)
  };

  return [value, setUser, deleteUser];
};
 export default useStorageUser;