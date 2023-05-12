import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  getName=''
  getId=''
  getCountry=''
  constructor(private route:ActivatedRoute){
    // this.route.params.subscribe(data=>{
    //   this.getName=data['name']
    //   this.getId=data['id']
    // })

    this.route.queryParams.subscribe(data=>{
      console.log(data['name'])
      console.log(data['id'])
      console.log(data['country'])
    this.getName=data['name']
    this.getId=data['id']
    this.getCountry=data['country']
    } )
  }
  ngOnInit(): void {
  }

}
