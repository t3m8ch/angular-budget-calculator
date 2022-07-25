import { FormControl, ValidationErrors } from '@angular/forms';

export function _thereAreNoWhiteSpace(control: FormControl): ValidationErrors | null {
  if (!control.value?.trim) {
    return null;
  }

  const isWhiteSpace = (control.value || '').trim().length === 0;
  return isWhiteSpace ? { whitespace: true } : null;
}
