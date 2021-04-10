import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiControllerUrl = `${environment.apiUrl}/rentals`;
  rentalCheckout?: Rental;

  constructor(private httpClient: HttpClient) {}

  getRentals(): Observable<ListResponseModel<Rental>> {
    return this.httpClient.get<ListResponseModel<Rental>>(
      `${this.apiControllerUrl}/getall`
    );
  }

  getRentalDetails(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/getrentaldetails`,
      rental
    );
  }

  getIdByRentalDetails(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/getidbyrentaldetails`,
      rental
    );
  }

  add(rental: Rental): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      `${this.apiControllerUrl}/add`,
      rental
    );
  }

  getRentalById(rentalId: number): Observable<SingleResponseModel<Rental>> {
    return this.httpClient.get<SingleResponseModel<Rental>>(
      `${this.apiControllerUrl}/getbyid?id=${rentalId}`
    );
  }
}
