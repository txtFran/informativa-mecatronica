import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-academica',
  templateUrl: './academica.page.html',
  styleUrls: ['./academica.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonButton, CommonModule, FormsModule, RouterModule ],
})
export class AcademicaPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}



