import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {FirebasePath} from "../../core/shared/firebase-path";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categoriasRef: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    this.categoriasRef = this.db.list(FirebasePath.CATEGORIAS);
  }

  getAll() {
    return this.categoriasRef.snapshotChanges().pipe(
      map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
    );
  }

  getByKey(key: string) {
    const path = `${FirebasePath.CATEGORIAS}${key}`;
    return this.db.object(path).snapshotChanges().pipe(
      map(change => {
        return ({ key: change.key, ...change.payload.val() as {} });
      })
    );
  }
}
