import { HttpClient } from '@angular/common/http';
import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
// export class HomeComponent implements OnInit,AfterViewInit, AfterContentInit, AfterContentChecked, OnChanges, DoCheck,AfterViewInit ,OnDestroy {
  export class HomeComponent implements OnInit, OnDestroy {
    dataArray:any
    dataob:Subscription
    dataob1:Subscription
    profil='{"firstname":"amira","lastname":"bej"}'
    newStudent={
      firstname:"Nafou",
      lastname:"kkk"
    }
    constructor(private share:ShareServiceService){
      this.dataob=this.share.getAllStudents().subscribe(data=>this.dataArray=data)

      this.dataob1=this.share.getOneStudent('id').subscribe(data=>this.dataArray=data)
      this.share.addNewStudent(JSON.parse(this.profil)).subscribe(data=>{
        console.log(data)
      })

      this.share.deleteOneStudent('id').subscribe(data=>console.log(data))

      this.share.updateOneStudent(this.newStudent,'id').subscribe(data=>console.log(data))
    }
    //  constructor(private http:HttpClient){
    //     // this.http.get('http://localhost:3000').subscribe(data=>this.dataArray=data)
        
    //   }  
    ngOnInit() {
      
    }

    ngOnDestroy(){
      this.dataob.unsubscribe()
      this.dataob1.unsubscribe()
    }

  // @ViewChild('firstName') myInput!:ElementRef
  // // @ViewChildren('myChildInput')
  // num=0

  // @Input('myInput') myI:any
  // constructor(){
  //    console.log("constructeur")
  //   // this.num=5
  // }

  // ngOnChanges(changes:any){
  //   console.log("ngOnChanges")
  //   console.log(changes)
  // }

  // ngOnInit() {
  //   console.log("ngOnInit")
    
  // }

  // ngDoCheck() {
    
  // }

  // ngAfterContentInit() {
    
  // }

  // ngAfterContentChecked() {
    
  // }

  

  // print(){
  //     this.ngOnInit()
  // }

  // ngOnDestroy(){

  // }

  

  ngAfterViewInit(){
    // this.myInput.nativeElement.focus()
    // this.myInput.nativeElement.value="Hello nafiii"
  }
  // num:any
  // ob:Subscription
  // ob2:Subscription
  // constructor(private share:ShareServiceService, private route:ActivatedRoute){
  //   this.ob2=this.route.params.subscribe((params)=>{
  //     console.log(params)
  //   })
  //   this.ob=this.share.testObservable().subscribe(val=>this.num=val)
  // }

  // @Input("name") myName:any
  // @Input("Mynum") num:any
  // @Input("myProfil") profil:any

  // @Output() myEvent=new EventEmitter()
  // name="Nafiii"
  // profil={
  //   firstName:"Nafissa",
  //   country:"Tunisia"
  // }
  // constructor(){
    
  // }


 
  // ngOnDestroy(){
  //   console.log("destroy")
  //    this.ob.unsubscribe()
  //    this.ob2.unsubscribe()
  // }




  // print(age:string, speciality:string){
  //   let p={
  //     age:age,
  //     speciality:speciality
  //   }
  //   this.myEvent.emit(p)
  // }

  // profile={
  //   firstname:"",
  //   lastname:"bouchoucha",
  //   website:"www.google.com"
  // }

  // linkImage="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
  // titleStyle="block"
  // Sizing="width: 160px"
  // num=1

  // verif=false

  // titleClass="title"

  // dataArray=["tunisia", "maroccco", "libya"]

  // style1="red"
  // style2="30px"
  // style3="underline"

  /******Form Group */
  // myForm=new FormGroup({
  //   fname:new FormControl,
  //   age:new FormControl
  // })

  /*******Form Builder */
  // myForm:any

  //   constructor(private formbuilder:FormBuilder){
  //     this.myForm=this.formbuilder.group({
  //       fname:['',[Validators.required, Validators.minLength(5),Validators.maxLength(8)]],
  //       age:['',Validators.required],
  //       email:['',[Validators.email,Validators.required]],
  //       items:this.formbuilder.array([
  //         this.formbuilder.group({
  //           id:['1'],
  //           title:['title1']
  //         }),
  //         this.formbuilder.group({
  //           id:['2'],
  //           title:['title2']
  //         }),
  //       ])
  //     })

  //   }

    // ngOnInit(){
    //   this.myForm.patchValue({ //patch value kima set value
    //     fname:'naf',
    //     age:10,
    //     email:'naf@e.co'
    //   })
    // }
  // constructor(private route:Router, private share:ShareServiceService){
  //   console.log(this.share.data)
  //   console.log(this.share.url)
  // }

  // print(){
  //   console.log(this.myForm.value)
  // }

  // get fname(){
  //   return this.myForm.get('fname')
  // }

  // get age(){
  //   return this.myForm.get('age')
  // }

  // get email(){
  //   return this.myForm.get('email')
  // }
  // get items(){
  //   return this.myForm.get('items') as FormArray
  // }

  // /***Dynamic form */
  // addnew(){
  //   let lengthArray=this.items.length
  //   let newRows=this.formbuilder.group({
  //     id:[lengthArray+1],
  //     title:['title'+lengthArray]
  //   })
  //   this.items.push(newRows)
  // }


  // delete(i:any){
  //   this.items.removeAt(i)
  // }

  // inc(){
  //   this.number++
  // }

  // dec(){
  //   this.number--
  // }

  // Show(){
  //   this.titleStyle="block"
  // }

  // Hidden(){
  //   this.titleStyle="none"
  // }



  // goToView(){
  //   this.route.navigate(['/profil/view/'+this.profile.firstname])
  // }

  // goToDetails(){
  //   this.route.navigate(['/profil/details'])
  // }


  // add(f:NgForm){
  //   let data=f.value
  //   console.log(data)
  // }
}


  