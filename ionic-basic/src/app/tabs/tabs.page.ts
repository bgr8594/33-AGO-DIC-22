import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
  }

}
