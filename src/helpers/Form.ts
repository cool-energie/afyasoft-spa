export default {
  validationRules: {
    required: value => !(!value || value.length == 0) || 'Ce champ est requis',
  }
}
