export const namePattern: RegExp = /^[A-Za-zÀ-ÿ' ]+$/;
export const emailPattern: RegExp = /^[a-zA-Z\d._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
export const passwordPattern: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%$!%*?&<>:;.,_\-\(\)\[\]\{\}])[A-Za-z\d@#%$!%*?&<>:;.,_\-\(\)\[\]\{\}]{5,}$/;
