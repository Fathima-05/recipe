import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Carousal } from "./components/carousal/carousal";
import { Footer } from "./components/footer/footer";
import { Quote } from "./components/quote/quote";
import { Grid } from "./components/grid/grid";

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('recipe');
}
