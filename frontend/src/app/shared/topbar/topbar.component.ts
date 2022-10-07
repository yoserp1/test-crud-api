import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  nombre:any = null;

  constructor(
    public _authService: AuthService,
  ) {
    this._authService.perfil().subscribe((data: any) => {
      this.nombre = data.name;
    });
  }

  ngOnInit(): void {
  }

}
