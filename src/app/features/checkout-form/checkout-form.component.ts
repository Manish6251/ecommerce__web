import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.css'
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm!: FormGroup;
  isSubmitted = false;


  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      expirationDate: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]]
      
    });
  }

  onSubmit() {
     
    if (this.checkoutForm?.valid) {
      alert('Form submitted successfully.');
      this.router.navigate(['/app-thank-you']);
      // Typically, you would send the form data to a backend service for further processing
    } else {
      this.checkoutForm.markAllAsTouched();
      alert('Form is invalid.');
    }
  }


}
