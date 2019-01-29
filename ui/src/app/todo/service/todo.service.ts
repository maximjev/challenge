import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../model/todo";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  public getAll(archived: boolean): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.urls.todo.base, this.appendParams(archived));
  }

  private appendParams(archived: boolean) {
    return {
      params: {
        archived: JSON.stringify(archived)
      }
    };
  }

  public create(description: string) {
    return this.http.post(environment.urls.todo.base, {description: description});
  }

  public archive(id: number) {
    return this.http.get(environment.urls.todo.archive(id));
  }
}
