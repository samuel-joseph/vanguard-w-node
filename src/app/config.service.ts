import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getFunds() {
    return this.http.get(`http://localhost:8082/api/funds`);
  }

  getFund(id:number) {
    return this.http.get(`http://localhost:8082/api/funds/${id}`);
  }

  editFund(id: number, fund: Object) {
    return this.http.put(`http://localhost:8082/api/funds/${id}`, fund);
  }

  addFund(fund: Object) {
    return this.http.post(`http://localhost:8082/api/funds`, fund);
  }

  removeFund(id: number) {
    return this.http.delete(`http://localhost:8082/api/funds/${id}`);
  }
}
