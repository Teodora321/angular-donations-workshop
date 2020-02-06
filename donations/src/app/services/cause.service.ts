import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICause } from '../interfaces/cause';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CauseService {
  causes: ICause[];
  // readonly selectedCause: ICause
  selectedCause: ICause;

  constructor(private http: HttpClient) { }
  //the question means that the id is optional

  getCauses(id?: number) {
    return this.http.get<ICause[] | ICause>(`http://localhost:3000/causes${id ? `/${id}` : ''}`).pipe(
      tap((causes) => this.causes = [].concat(causes))
    );
  }

  selectCause(cause: ICause) {
    this.selectedCause = cause;
    //(this as any).selectedCause = cause;
  }

  donate(amount: number) {
    return this.http.put<ICause>(`http://localhost:3000/causes/${this.selectedCause._id}`, {
      body: { collectedAmount: this.selectedCause.collectedAmount + amount }
    });
  }
}