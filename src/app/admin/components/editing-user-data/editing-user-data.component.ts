import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from '../../../../shared/enums/role';
import { User } from '../../../../shared/model/user.model';

@Component({
  selector: 'app-editing-user-data',
  templateUrl: './editing-user-data.component.html',
  styleUrls: ['./editing-user-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditingUserDataComponent implements OnInit {
  form!: FormGroup;
  username = new FormControl('', [Validators.required]);
  role = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(10)]);
  confirmPassword = new FormControl('', [Validators.required]);
  compareValidator = false;
  roles = Object.values(Role);
  user: User;

  constructor(
    public dialogRef: MatDialogRef<EditingUserDataComponent>,
    private cdr: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) data: User
  ) {
    this.user = data;
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: this.username,
      role: this.role,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });

    if (this.user) {
      this.form.setValue({
        username: this.user.username,
        role: this.user.role,
        password: this.user.password,
        confirmPassword: this.user.password,
      });
    }

    this.confirmPassword.valueChanges.subscribe(() => {
      if (this.password.value !== this.confirmPassword.value) {
        this.confirmPassword.setErrors({ PasswordNotMatch: true });
        this.compareValidator = true;
      }
    });
  }

  get userValue(): AbstractControl | null {
    return this.form.get('username');
  }

  get roleValue(): AbstractControl | null {
    return this.form.get('role');
  }

  get passwordValue(): AbstractControl | null {
    return this.form.get('password');
  }

  get confirmPasswordValue(): AbstractControl | null {
    return this.form.get('confirmPasswordValue');
  }

  onCancelClick() {
    this.dialogRef.close(this.form.value);
  }

  onSaveClick() {
    this.dialogRef.close(this.form.value);
  }
}
