import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {AngularFireStorage} from "@angular/fire/storage";
import {FirebasePath} from "../../core/shared/firebase-path";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  cuponsRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.cuponsRef = this.db.list(FirebasePath.CUPONS);
  }

  getByKey(key: string){
    const path = `${FirebasePath.CUPONS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map( change => {
        return { key: change.payload.key, ...change.payload.val() as {} };
      })
    );
  }

  getByField(field: string , value: string){
    const cuponsRef = this.db.list(FirebasePath.CUPONS, query => query
      .orderByChild(field)
      .equalTo(value));

    return cuponsRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() as {} }));
      })
    );
  }

  insert(cupom: any){
    return new Promise(resolve => {
      this.cuponsRef.push(cupom)
        .then((result: any) => resolve(result.key));
    });
  }

  update(key: string, cupom: any){
    return new Promise((resolve, reject) => {

      this.cuponsRef.update(key, cupom)
        .then(() => resolve(key))
        .catch(() => reject());
    });
  }

  remove(key: string){
    return this.cuponsRef.remove(key);
  }
}
