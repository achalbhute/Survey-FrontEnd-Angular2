import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PostsService{
    constructor(private http: Http){

    }
    getPosts()
    {
      return this.http.get('http://10.222.133.37:8080/Survey/rest/surveys/')
        .map(res => res.json());
    }
    addSurveyREST(survey){
        console.log(survey);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('title', survey.title);
        urlSearchParams.append('description', survey.description);
        urlSearchParams.append('choices', survey.choices);
    //    urlSearchParams.append('survey', survey);
        let body = urlSearchParams.toString()
        return this.http.post('http://10.222.133.37:8080/Survey/rest/surveys/', body, {headers:headers})
        .map(res => res.json());
    }
    setSurveyResult(data){
        console.log("from setsurvey"+data);
         var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let urlSearchParams = new URLSearchParams();
         urlSearchParams.append('value', data.value);
        let body = urlSearchParams.toString()

        var url = 'http://10.222.133.37:8080/Survey/rest/surveys/'+data.id+'/'
       // let headers = new Headers({ 'Content-Type': 'application/json' });
       // let options = new RequestOptions({ headers: headers });
        return this.http.put(url, body, {headers:headers})//, data, options)
                .map(res => res.json());
    }
    getPostResult()
    {
      return this.http.get('http://10.222.133.37:8080/Survey/rest/surveys/result/')
        .map(res => res.json());
    }

    getStates()
    {
        return this.http.get('https://10.51.235.198:8246/cm_dashboard/_/1/states/')
        .map(res => res.json());
    }
} 