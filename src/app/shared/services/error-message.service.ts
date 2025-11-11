import { Injectable } from '@angular/core';
import _ from 'lodash';

@Injectable()
export class ErrorMessageService {
  constructor() { }

  checkErrorMessage(formType: any, key: string) {
    const me = this;
    if (key === 'Email ID' && formType.hasError('pattern')) {
      return 'Enter valid email';
    } else if (key === 'Mobile Number' && formType.hasError('pattern')) {
      return 'Enter valid mobile number';
    } else if (key === 'Confirm Password' && formType.hasError('notMatching')) {
      return 'Password does not match';
    } else if (formType.hasError('pattern')) {
      return 'Only alphabets are allowed';
    }
    return me.defaultCase(formType, key);
  }

  defaultCase(formType: any, key: string) {
    if (formType.hasError('minlength')) {
      return `Must be at least ${_.get(formType.errors, 'minlength.requiredLength')} characters`;
    } else if (formType.hasError('maxlength')) {
      return `Only ${_.get(formType.errors, 'maxlength.requiredLength')} characters allowed`;
    } else if (formType.hasError('max')) {
      return `Max ${_.get(formType.errors, 'max.max')} allowed`;
    } else if (formType.hasError('min')) {
      return 'Value should be greater than 0';
    } else if (formType.hasError('required')) {
      return `${key} is required`;
    } else {
      return 'This field has error';
    }
  }
}
