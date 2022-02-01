import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  linkedInCredentials = {
    clientId: "78y1ddsduq1idm",
    redirectUrl: "https://www.linkedin.com/login",
   
  };
  
  constructor(private http: HttpClient) {}
  
  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&state=987654321`;
  }

}
