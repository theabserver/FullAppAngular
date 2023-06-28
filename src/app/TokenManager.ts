export class TokenManager {
  getToken(){
    return localStorage.getItem('u_token') || "";
  }
  setToken(token: string) {
    localStorage.setItem('u_token', token);
  }
  deleteToken() {
    localStorage.removeItem('u_token');
  }
}
