import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/user.service';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  msg:String = '';
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(    
    
    private route: ActivatedRoute,
    private _userService: UserService,
    private router: Router
  ){ }
  ngOnInit(){    
      this.route.params.subscribe(param => {
        console.log(param)        
      })
  }

  add() {
    if (this.userForm.valid) {
      this._userService.users.push(this.userForm.value);
      this.router.navigate(['/']);            
    } else {
      this.msg = 'Please complete form';
    }
  }

  
}


