export interface SigInRequest {
  username: string;
  password: string;
}

export interface SigInResponse {
  id: string;
  email: string;
  last_name: string;
  first_name: string;
  username: string;
  roles: [string];
  access_token: string;
}
