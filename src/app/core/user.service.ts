import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
   HttpRequest 
} from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class UserService {
  isAuth: any;
  options: any;  
  newoptions: any;
  users:any;

  constructor(
    private http: HttpClient,   
  ) {
    this.options = {
      cache: false,
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.options.headers["Access-Control-Allow-Origin"] = "*";
    this.options.headers["Access-Control-Allow-Credentials"] = "true";
    this.users = [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          phone: '1234567890',
          address: '123 Main St'
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          phone: '9876543210',
          address: '456 Elm St'
        }
      ];
  }

  deleteuser() {  
    return this.http
    //   .get(
    //     this.actionUrl + this._configuration.API_Config.GET_CARD_LIST,
    //     this.options
    //   )
    //   .pipe(
    //     catchError((error, caught): any => {
    //       return of(error);
    //     })
    //   );
  }

  getusers() {      
    return  this.users;   
  }
  addusers() {
    
  }
    
}
