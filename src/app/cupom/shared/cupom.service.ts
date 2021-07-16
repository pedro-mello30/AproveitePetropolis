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

  getByEstabelecimento(estabelecimentoKey: string, status: boolean){
    const cuponsRef = this.db.list(FirebasePath.CUPONS, query => query
      .orderByChild('estabelecimentoKey')
      .equalTo(estabelecimentoKey)
      .orderByChild('status').equalTo(true));

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

  generateCupom(estabelecimentoKey, emailUser){
    // const path = `${FirebasePath.CUPONS_GERADOS}${estabelecimentoKey}`;
    const path = `${FirebasePath.CUPONS_GERADOS}`;
    const cupomRef = this.db.list(path);
    const token = this.generateToken();
    const date = new Date().toDateString();
    const cupom = {
      email: emailUser,
      token: token,
      date: date,
      status: false
    }
    cupomRef.push(cupom);
    return cupom.token;
  }

  generateToken(){
    const length = 8;
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
    }

    return b.join("");
  }

}
