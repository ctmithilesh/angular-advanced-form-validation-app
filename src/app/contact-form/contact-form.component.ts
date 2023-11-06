import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, Form, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {


    title = 'Angular Reactive Form'
    contactForm = new FormGroup({
       name: new FormControl(null, [Validators.required]),
       email: new FormControl('', [Validators.required,Validators.email]),
       designation: new FormControl('',[Validators.required])
    })
    submitted = false;

    get name(){
      return this.contactForm.get('name')
    }

    get email(){
      return this.contactForm.get('email')
    }

    get designation(){
      return this.contactForm.get('designation')
    }

    // contactForm(){
    //     console.log(this.contactForm.value)
    // }

    submitData(){
        console.log('submitted data')
        console.log(this.contactForm.value)

    }


}
