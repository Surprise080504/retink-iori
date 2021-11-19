import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class SevService {
  constructor(private firestore: AngularFirestore) {}

  getServices() {
    return this.firestore.collection('services').snapshotChanges();
  }
}
