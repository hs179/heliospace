import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent implements OnInit {

  constructor( private http:HttpClient){}

  private URL="https://jsonplaceholder.typicode.com/posts"
  showData:any[]=[]
  ngOnInit(){
    this.fetchData()
  }

  fetchData(){
   const respones =  this.http.get(this.URL)
   respones.subscribe(data => {
    const finaldata = JSON.parse(JSON.stringify(data))
    this.showData = finaldata
    console.log(this.showData)
   })
  }

}
