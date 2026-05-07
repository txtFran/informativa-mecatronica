import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.page.html',
  styleUrls: ['./laboral.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter , CommonModule, FormsModule]
})
export class LaboralPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
