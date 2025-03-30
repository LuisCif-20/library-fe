export const cuiPattern: RegExp = /^\d{13}$/;
export const carnetPattern: RegExp = /^\d{9}$/;
export const namePattern: RegExp = /^[A-Za-zÀ-ÿ' ]+$/;
export const emailPattern: RegExp = /^[a-zA-Z\d._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
export const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%$!%*?&<>:;.,_\-\(\)\[\]\{\}])[A-Za-z\d@#%$!%*?&<>:;.,_\-\(\)\[\]\{\}]{5,}$/;
