import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-stepsform',
  templateUrl: './stepsform.component.html',
  styleUrls: ['./stepsform.component.scss']
})
export class StepsformComponent implements OnInit {

 isLinear = false;
  firstFormGroup: FormGroup | any;
  secondFormGroup: FormGroup | any;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }




}
