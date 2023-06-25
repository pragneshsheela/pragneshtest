import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent {
  selecteduser :any;
  users:any;
  constructor(    
    private route: ActivatedRoute,
    private _userService: UserService,
    private router: Router
  ){ }
  ngOnInit(){    
    this.users = this._userService.getusers()
    this.route.params.subscribe(param => {
       let tempuser= param['id'];
       this.selecteduser = this.users.find((seluser: { name: any; }) => seluser.name === tempuser);
       console.log("this.selecteduser",this.selecteduser)  
    })
}

}
