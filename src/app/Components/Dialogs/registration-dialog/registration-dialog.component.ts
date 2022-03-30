import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/Entities/User';
import { AuthService } from 'src/app/Services/AuthService';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit
{
  public form = new FormGroup({});

  constructor(private auth: AuthService) {}

  ngOnInit()
  {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      repeatedPassword: new FormControl('')
    });
  }

  public onSubmit()
  {
    if (this.auth.IsSamePasswords(this.form.value.password, this.form.value.repeatedPassword))
    {
      this.form.disable();
      this.auth.register(this.form.value);
      console.log(this.form.value.password);
    }
    else alert('Passwords do not match');
  }
}
