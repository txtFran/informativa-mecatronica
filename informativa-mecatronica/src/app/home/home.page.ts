import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { IonHeader, IonTitle, IonContent, IonCard, IonCardContent, IonFooter, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonTitle, IonContent, IonCard, IonCardContent, IonFooter, IonButton, RouterModule],
})
export class HomePage {
  constructor() {}
}
