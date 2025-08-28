export default {
  validationRules: {
    required: value => !(!value || value.length == 0) || 'Ce champ est requis',
    passwordRules: [
      v => v.length >= 12 || 'Minimum 12 caractères',
      v => /[A-Z]/.test(v) || 'Au moins une majuscule',
      v => /[a-z]/.test(v) || 'Au moins une minuscule',
      v => /[0-9]/.test(v) || 'Au moins un chiffre',
      v => /[@$!%*?&#]/.test(v) || 'Au moins un caractère spécial',
      v => !/\s/.test(v) || 'Pas d’espace autorisé'
    ]

  }
}
