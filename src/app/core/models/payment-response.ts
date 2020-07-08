export enum PaymentResponseStatus {
  approved = 'Aprovada',
  declined = 'Declinada'
}

export interface PaymentResponse {
  success: boolean
  status: PaymentResponseStatus
}


