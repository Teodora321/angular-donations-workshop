import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css', '../../error-styles.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      cause: ["", [Validators.required, Validators.minLength(5)]],
      neededAmount: [null, [Validators.required, Validators.min(100)]],
      description: ["", [Validators.required,Validators.minLength(50)]],
      imageUrl:["", [Validators.required]]
      
    })
  }

  ngOnInit() {
  }

}
