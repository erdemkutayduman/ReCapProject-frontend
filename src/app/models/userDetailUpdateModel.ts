export interface UserDetailUpdateModel {
  id: number;
  customerId: number;
  firstName: string;
  lastName: string;
  customerName: string;
  nationalIdentity: string;
  currentPassword: string;
  newPassword: string;
}
