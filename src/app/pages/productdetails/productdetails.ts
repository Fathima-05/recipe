import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {
  products: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (history.state && history.state.product) {
      this.products = history.state.product;
    }
  }
}