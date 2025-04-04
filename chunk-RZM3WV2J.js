// src/app/forms/validators/patterns.ts
var namePattern = /^[A-Za-zÀ-ÿ' ]+$/;
var emailPattern = /^[a-zA-Z\d._]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
var ISBNPattern = /^978\d{10}$/;
var codePattern = /^[0-9]{3}-[A-Z]{3}$/;
var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%$!%*?&<>:;.,_\-\(\)\[\]\{\}])[A-Za-z\d@#%$!%*?&<>:;.,_\-\(\)\[\]\{\}]{5,}$/;

export {
  namePattern,
  emailPattern,
  ISBNPattern,
  codePattern,
  passwordPattern
};
//# sourceMappingURL=chunk-RZM3WV2J.js.map
