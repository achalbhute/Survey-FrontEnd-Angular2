import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'notFound',
    templateUrl: 'notFound.component.html',
    providers: [PostsService]
})
export class ErrorComponent {

    
    // surveyResult: {};
    // formOutp: Object = {};
    states : {};
    constructor(private postsService: PostsService, private ref: ChangeDetectorRef) {
        this.getStates();
    }
    getStates(){
        this.postsService.getStates().subscribe(state => {
            this.states = state;
        });
    }
    // addSurvey(form: NgForm) {
    //    // var val = JSON.stringify(form.value);
    //     this.postsService.addSurveyREST(form.value).subscribe(data => {
    //         this.formOutp = data;
    //         if(data.success){
    //             this.ref.detectChanges();
    //             this.getPosts();
    //         }
    //     })
    // }
     
    
}