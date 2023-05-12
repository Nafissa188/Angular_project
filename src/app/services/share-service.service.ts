import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  data={
    name:'houssem',
    last:'bejaoui',
    country:'tunisia'
  }

  url="www.nafissa.com"

  isAdmin=true

  params=new HttpParams() // chna3mlou middleware fl backend (verifySecretClient)
  .set('secret','winopapa') //or .append
  .set('client','123456789')
  header=new HttpHeaders()
  .set('authorization','token')
  .set('Content-type',"application.json")



  constructor(private http:HttpClient) { }


  print(){
    console.log(this.data.name)
    console.log(this.data.last)
    console.log(this.data.country)
  }

  testObservable(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        observer.next("one")
      },2000),

      setTimeout(()=>{
        observer.next("two")
      },4000)

      setTimeout(()=>{
        observer.next("three")
      },6000)

      // setTimeout(()=>{
      //   observer.complete()
      // },8000)

      setTimeout(()=>{
        observer.next("four")
      },10000)

      setTimeout(()=>{
        observer.error()
      },10000)
    })
  }
  
  getAllStudents(){
    return this.http.get('http://localhost:3000/students',{params:this.params, headers:this.header})
  }


  getOneStudent(id:any){
    return this.http.get(`http://localhost:3000/students/${id}`)
  }

  addNewStudent(profil:any){
   
    return this.http.post('http://localhost:3000/addstudent',profil)
  }

  deleteOneStudent(id:any){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }

  updateOneStudent(newStudent:any, id:any){
    return this.http.patch(`http://localhost:3000/students/${id}`,newStudent)

  }


}
