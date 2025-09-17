import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Spinner } from '../../components/spinner/spinner';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss']
})
export class RegisterPage {
errorRegister=false;
userService= inject(UserService);
isloading= false;
router = inject(Router)

 async register(form: any){
    console.log(form);
    this.errorRegister = false;
    if(!form.email || !form.password || !form.password2 || form.password !== form.password2){
      this.errorRegister = true;
      return;
    }
    this.isloading = true;
    const formValue = (form as { value: any }).value;
    const res = await this.userService.register(formValue);
    if(res.ok){
      this.router.navigate(["/login"]);
      this.isloading = false;
      return;
    }
    this.isloading = false;
    this.errorRegister = true;
  }
}
