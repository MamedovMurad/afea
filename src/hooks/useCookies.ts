import { useState } from "react";








export const useCookie = (key:any, defaultValue:any) => {
    const getCookie = () => getItem(key) || defaultValue;
    const [cookie, setCookie] = useState(getCookie());
 

    const updateCookie = (value:any, numberOfDays:any) => {
        setCookie(value);
        setItem(key, value, numberOfDays);
    };
   return [cookie, updateCookie];
};


export const getItem = (key:any) =>
    document.cookie.split("; ").reduce((total, currentCookie) => {
       const item = currentCookie.split("=");
       const storedKey = item[0];
       const storedValue = item[1];
       return key === storedKey 
         ? decodeURIComponent(storedValue) 
         : total;
    }, '');


   export  const setItem = (key:any, value:any, numberOfDays:any) => {
        const now = new Date();
        // set the time to be now + numberOfDays
        now.setTime(now.getTime() + (numberOfDays * 60 * 60 * 24 * 1000));
         document.cookie = `${key}=${value};     expires=${now.toUTCString()}; path=/`;
     };