// src/app/forms/validators/custom-validators.ts
var isFieldOneEqualsFieldTwo = (field_1, field_2) => {
  return (formGroup) => {
    const field_1_value = formGroup.get(field_1)?.value;
    const field_2_value = formGroup.get(field_2)?.value;
    if (field_1_value !== field_2_value) {
      formGroup.get(field_2)?.setErrors({ notEqual: true });
      return { notEqual: true };
    }
    formGroup.get(field_2)?.setErrors(null);
    return null;
  };
};

export {
  isFieldOneEqualsFieldTwo
};
//# sourceMappingURL=chunk-ZCXXLI7T.js.map
