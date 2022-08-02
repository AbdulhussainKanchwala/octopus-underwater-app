import { Injectable } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  constructor() { /* constructor code will go here */ }

  public validateForm(group : FormGroup, formErrors: any, validationMessages: any, flag:boolean = false)
  {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      if (abstractControl instanceof FormGroup) {
        this.validateForm(abstractControl, formErrors,validationMessages);
      } else {
        formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.dirty || flag)) {
          const messages = validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey != 'passwordStrength') {
              formErrors[key] += messages[errorKey] + ' ';
            }
            else{
              formErrors[key] += abstractControl.errors['passwordStrength']
            }
          }
        }
      }
    });
  }

  public markDirty(form : FormGroup) {
    this.markGroupDirty(form);
  }

  private markGroupDirty(formGroup: any) {
    Object.keys(formGroup.controls).forEach(key => {
      switch (formGroup.get(key).constructor.name)
      {
        case 'FormGroup':
          this.markGroupDirty(formGroup.get(key) as FormGroup);
          break;
        case 'FormArray':
          this.markArrayDirty(formGroup.get(key) as FormArray);
          break;
        case 'FormControl':
          this.markControlDirty(formGroup.get(key) as FormControl);
          break;
      }
    });
  }

  private markArrayDirty(formArray: FormArray) {
    formArray.controls.forEach(control => {
      switch (control.constructor.name) {
        case 'FormGroup':
          this.markGroupDirty(control as FormGroup);
          break;
        case 'FormArray':
          this.markArrayDirty(control as FormArray);
          break;
        case 'FormControl':
          this.markControlDirty(control as FormControl);
          break;
      }
    });
  }

  private markControlDirty(formControl: FormControl) {
    formControl.markAsDirty();
  }

}
