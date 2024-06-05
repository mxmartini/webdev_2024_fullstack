import { useState, useEffect } from "react";

const useCookie = (cookieName:string): [v:string, s:(s:string, d:Date)=>void, d:()=>void] => {
  const [cookieValue, setCookieValue] = useState("");

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${cookieName}=`));

    setCookieValue(cookie ? cookie.split("=")[1] : "");
  }, [cookieName]);

  const setCookie = (value:string, expirationDate:Date) => {
    document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
  };

  const deleteCookie = () => {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };

  return [cookieValue, setCookie, deleteCookie];
};
 export default useCookie;