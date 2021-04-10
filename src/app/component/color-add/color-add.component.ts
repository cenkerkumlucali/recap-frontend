import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ColorService } from 'src/app/services/colors.service';
@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
})
export class ColorAddComponent implements OnInit {
  colorAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private authService: AuthService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.createColorAddForm();
    console.log(this.colorAddForm)
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
    });
  }
  add() {
    if (this.colorAddForm.valid) {
      let productModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.add(productModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          setTimeout(function(){
            location.reload()
          },500)
        },
        (responseError) => {
          if (responseError.error.ValidationErrors.length > 0) {
            console.log(responseError.error.Errors);
            for (
              let i = 0;
              i < responseError.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
  checkToLogin() {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      return false;
    }
  }
}
