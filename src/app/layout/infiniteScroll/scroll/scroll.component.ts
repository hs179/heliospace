import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {

  posts: any[] = [];  // data to show
  page = 0;           // current page number
  limit = 10;         // how many items per load

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${this.page * this.limit}&_limit=${this.limit}`;
    this.http.get<any[]>(url).subscribe(data => {
      this.posts = [...this.posts, ...data]; // append new posts
      this.page++; // next time, load next page
    });
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const bottomReached =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

    if (bottomReached) {
      this.loadPosts();
    }
  }
}
