import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/AuthService';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.css']
})
export class RegistrationDialogComponent implements OnInit
{
  form = new FormGroup({})

  constructor(private auth: AuthService) {}

  ngOnInit()
  {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  onSubmit()
  {
    this.form.disable()
    console.log(this.form.value);
    this.auth.register(this.form.value);
  }
}
