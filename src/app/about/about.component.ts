import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private share:ShareServiceService){
    console.log(this.share.data)
    console.log(this.share.url)
  }
  ngOnInit(): void {
    
  }

}
