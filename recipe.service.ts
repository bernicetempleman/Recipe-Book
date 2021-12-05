import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl= 'http://localhost:3000/recipes';
  private subjectName = new Subject<any>(); 
  //need to create a subject
  constructor(private http: HttpClient) { }

  sendUpdate(message: string) { 
    //the component that wants to update something, calls this fn
    this.subjectName.next({ text: message }); 
    //next() will feed the value in Subject
}

getUpdate(): Observable<any> { 
  //the receiver component calls this function 
    return this.subjectName.asObservable(); 
    //it returns as an observable to which the receiver funtion will subscribe
}
  
  getRecipe(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  
  getRecipesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getRecipesImages(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createRecipe(recipe: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, recipe);
  }

  updateRecipe(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
