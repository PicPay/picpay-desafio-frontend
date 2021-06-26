export class ApiError {
  success: boolean;
  status: string;

  constructor(success: boolean, status: string) {
    this.success = success;
    this.status = status;
  }
}