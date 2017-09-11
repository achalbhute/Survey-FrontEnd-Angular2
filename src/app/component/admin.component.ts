import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'admin',
    templateUrl: 'admin.component.html',
    providers: [PostsService]
})
export class AdminComponent {
    surveyResult: {};
    formOutp: Object = {};

    constructor(private postsService: PostsService, private ref: ChangeDetectorRef) {
        this.getPosts();
        this.formOutp['success'] = false;
    }
    getPosts(){
        this.postsService.getPostResult().subscribe(survey => {
            this.surveyResult = survey;
        });
    }
    addSurvey(form: NgForm) {
       // var val = JSON.stringify(form.value);
        this.postsService.addSurveyREST(form.value).subscribe(data => {
            this.formOutp = data;
            if(data.success){
                this.ref.detectChanges();
                this.getPosts();
            }
        })
    }
}
