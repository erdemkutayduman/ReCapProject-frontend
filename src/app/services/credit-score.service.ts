import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditScore } from '../models/credit-score';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditScoreService {
  apiUrl = `${environment.apiUrl}/creditscore`;

  constructor(private httpClient: HttpClient) {}

  getById(
    customerId: number
  ): Observable<SingleResponseModel<CreditScore>> {
    return this.httpClient.get<SingleResponseModel<CreditScore>>(
      `${this.apiUrl}/getbyid`,
      {
        params: {
          customerId: customerId.toString(),
        },
      }
    );
  }
}
