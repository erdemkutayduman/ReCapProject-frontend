import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreditCard } from '../models/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  apiControllerUrl = `${environment.apiUrl}/creditcards`;

  constructor(private httpClient: HttpClient) {}

  getAllByCustomerId(
    customerId: number
  ): Observable<ListResponseModel<CreditCard>> {
    return this.httpClient.get<ListResponseModel<CreditCard>>(
      `${this.apiControllerUrl}/getbyid`,
      {
        params: {
          customerId: customerId.toString(),
        },
      }
    );
  }

  add(creditCard: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      creditCard
    );
  }

  delete(creditCard: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/delete`,
      creditCard
    );
  }

  update(creditCard: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/update`,
      creditCard
    );
  }

  getAllCards(): Observable<ListResponseModel<CreditCard>> {
    return this.httpClient.get<ListResponseModel<CreditCard>>(
      `${this.apiControllerUrl}/getall`
    );
  }
}
