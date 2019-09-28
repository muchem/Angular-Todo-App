import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }from '@angular/common/http';
import { Todo} from '../Models/Todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  _url:string = 'https://jsonplaceholder.typicode.com/todos';
  limit: string = '?_limit=15';
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]>{
    return  this.http.get<Todo[]>(`${this._url}${this.limit}`);
  }
}
