import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  verifAdmin=false
  constructor(private s:ShareServiceService){
      this.verifAdmin=this.s.isAdmin
  }
  ngOnInit(): void {
    
  }

}
