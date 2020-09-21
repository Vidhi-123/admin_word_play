import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private word:string="http://localhost:3000/wordadmin/";
  private word1:string="http://localhost:3000/word/";
  constructor(private _http:HttpClient) { }

  getAdminWords()
  {
    return this._http.get(this.word);
  }
  getAdminWordsById(word_id)
  {
    return this._http.get(this.word+word_id);
  }
  getWordsById(word_id)
  {
    return this._http.get(this.word1+word_id);
  }
  DeletewordById(word_id)
  {
    return this._http.delete(this.word+word_id);
  }

}
