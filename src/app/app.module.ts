import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"ludoteca-9561e","appId":"1:857823905548:web:5f01f9dd81ff4f965aeb29","databaseURL":"https://ludoteca-9561e-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"ludoteca-9561e.appspot.com","apiKey":"AIzaSyBWV_cWTqpHrSJQcm07BH84n6q8j4K0gnc","authDomain":"ludoteca-9561e.firebaseapp.com","messagingSenderId":"857823905548"})),
    provideFirestore(() => getFirestore()),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
