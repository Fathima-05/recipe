import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServicaNamee } from '../../servica-namee';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {
  cards: any[] = [];

  constructor(
    private service: ServicaNamee,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getproducts().subscribe((data: any) => {
      this.cards = data.recipes;
      this.cd.detectChanges();
    });
  }

  viewProductDetails(product: any) {
    this.router.navigate(['/productdetails', product.id], { state: { product } });
  }
}