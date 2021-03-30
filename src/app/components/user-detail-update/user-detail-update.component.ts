import { LocalStorageService } from './../../services/local-storage.service';
import { UserDetail } from '../../models/entities/user-detail';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail-update',
  templateUrl: './user-detail-update.component.html',
  styleUrls: ['./user-detail-update.component.css']
})
export class UserDetailUpdateComponent implements OnInit {

  user:UserDetail;
  userDetailUpdateForm:FormGroup;

  constructor(private userService:UserService,
              private toastrService:ToastrService,
              private formBuilder:FormBuilder,
              private localStorage:LocalStorageService) { }

  ngOnInit(): void {
      let email = this.localStorage.get("email");
      this.getUserByEmail(email == undefined
                          ? email = ""
                          : email.toString());
      this.createUserDetailUpdateForm();
  }

  getUserByEmail(email:string) {
    this.userService.getUserByEmail(email).subscribe(response => {
      this.user = response.data;
    })
  }

  createUserDetailUpdateForm(){
    this.userDetailUpdateForm=this.formBuilder.group({
      id:["",Validators.required],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required]
    })
  }

  updateUserDetail(){
    this.userDetailUpdateForm.patchValue({ id: this.user.id })
    if(this.userDetailUpdateForm.valid){
      let userDetail = Object.assign({},this.userDetailUpdateForm.value);
      this.userService.updateUserDetail(userDetail).subscribe(
        response => {
        this.toastrService.success(response.message,"Successful")
        this.localStorage.set("email", this.userDetailUpdateForm.get("email")?.value)
        setTimeout(() => { window.location.reload(); }, 1000);
        },
        responseError => {
        if(responseError.error.ValidationErrors.length > 0) {
          for(let i=0;i<responseError.error.ValidationErrors.length;i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage,"Validation Error")
          }
        }
      })
    }
    else {
      this.toastrService.error("The form is missing.","Attention!")
    }
  }

}