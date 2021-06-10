import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {FirebasePath} from "../../core/shared/firebase-path";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  estabelecimentosRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.estabelecimentosRef = this.db.list(FirebasePath.ESTABELECIMENTOS);
  }

  getAll() {
    return this.estabelecimentosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string){
    const path = `${FirebasePath.ESTABELECIMENTOS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map( change => {
        return { key: change.payload.key, ...change.payload.val() as {} };
      })
    );
  }

  getByField(field: string , value: string){
    const estabelrecimentosRef = this.db.list(FirebasePath.ESTABELECIMENTOS, query => query
      .orderByChild(field)
      .equalTo(value));

    return estabelrecimentosRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() as {} }));
      })
    );
  }

}
