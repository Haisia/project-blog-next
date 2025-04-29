export interface ResponseData<T = unknown> {
  data: T;
  code: string;
  message: string;
  timestamp: string;
}