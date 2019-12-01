import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyDice';
  private images: HTMLImageElement[];
  public die1: number;
  public img1Src: string;
  public die2: number;
  public img2Src: string;
  public die3: number;
  public img3Src: string;
  public total: number;
  public constructor() {
    this.preload();
    this.roll();
  }
  private static makeImgSrc(n: number) {
    return  `assets/Images/Dice/side_${n}.png`;
  }
  public preload() {
this.images = [];
for (let i = 1; i <= 6; i++) {
  const image = new Image();
  image.src = AppComponent.makeImgSrc(i);
  this.images.push(image);
}
  }

///
  public roll() {
    this.die1 = Math.floor(1 + 6 * Math.random());
    this.img1Src = AppComponent.makeImgSrc(this.die1);

    this.die2 = Math.floor(1 + 6 * Math.random());
    this.img2Src = AppComponent.makeImgSrc(this.die2);

    this.die3 = Math.floor(1 + 6 * Math.random());
    this.img3Src = AppComponent.makeImgSrc(this.die3);
    this.total = this.die1 + this.die2 + this.die3;

  }
}
