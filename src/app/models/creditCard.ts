export interface CreditCard {
  id: number;
  customerId: number;
  nameSurname: string;
  cardNumber: string;
  expirationMonth: number;
  expirationYear: number;
  cvc: string;
  cardType: string;
}
