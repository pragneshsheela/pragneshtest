import { Component, OnInit } from '@angular/core';
import{ UserService} from '../core/user.service'

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [ `input{width:100%;padding: 10px 15px;margin:5px auto;}` ]
})
export class UserComponent implements OnInit {
  selectedUser: User | null = null;
  searchEmail: string = '';
  users: any;
  searchText: any;
  uservis: any;

  constructor(
    private _userService: UserService    
  ) {}


  ngOnInit() {    
    this.users = this._userService.getusers()
    this.uservis = false;   
  }

  deleteUser(user: User): void {    
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      this.users.length
    }
    if(this.users.length == 0){
      this.uservis = true;
    }
  }
  showDetails(user: User): void {
       console.log('User details:', user);
  }
  searchByEmail(event: any) {
    this.searchEmail = event.target.value;    
  }
}

