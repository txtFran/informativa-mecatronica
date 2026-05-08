import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonButton, IonFooter, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.page.html',
  styleUrls: ['./laboral.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonButton, IonFooter, IonCard, CommonModule, FormsModule]
})
export class LaboralPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
