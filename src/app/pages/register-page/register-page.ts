import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Spinner } from '../../components/spinner/spinner';
import { UsersService } from '../../services/userService';
@Component({
  selector: 'app-register-page',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss']
})
export class RegisterPage {
errorRegister=false;
userService = inject(UsersService);
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
    const res = await this.userService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"]);
      this.isloading = false;
      return;
    }
    this.isloading = false;
    this.errorRegister = true;
  }
}
