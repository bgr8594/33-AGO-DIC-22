import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'src/app/service/menu-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  
  constructor(private menuService: MenuServiceService) { }

  ngOnInit() {
    this.menuService.setTitle("Administracion");
  }

}
