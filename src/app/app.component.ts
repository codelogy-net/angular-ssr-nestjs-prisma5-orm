import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _httpClient = inject(HttpClient);

  tasks: any[] = [];

  ngOnInit() {
    this._httpClient
      .get<any>('http://localhost:3000')
        .subscribe(response => {
        this.tasks = response.tasks;
      })
    ;
  }
}
