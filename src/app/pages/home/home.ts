import { Component } from '@angular/core';
import { Carousal } from '../../components/carousal/carousal';
import { Quote } from '../../components/quote/quote';
import { Grid } from '../../components/grid/grid';

@Component({
  selector: 'app-home',
  imports: [Carousal,Quote,Grid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
