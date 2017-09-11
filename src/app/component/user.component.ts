import { Component } from '@angular/core';
import { PostsService } from '../services/post.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent {
    title: string;
    description: string;
    choices: string[];
    result: string;
    total: number;
    showData: boolean;
    survey: {};
    formOutP:Object = {}

    constructor(private postsService: PostsService, private ref: ChangeDetectorRef) {

        this.postsService.getPosts().subscribe(survey => {
            this.survey = survey;
            for (var k in this.survey) {
                this.survey[k]["voiceOpenion"] = true;
                this.survey[k]["voicedOpenion"] = false;
            }
        });

    }

    onSubmit(form: NgForm, index) {
        
        form.value['id'] =this.survey[index]['id'];
        
        //var val = JSON.stringify(form.value);
        this.postsService.setSurveyResult(form.value).subscribe(data => {
            this.formOutP = data;
            if(data.success){
                this.ref.detectChanges();
                this.survey[index]["voicedOpenion"] = true;
            }
        })
       
    }
    setVoice(index){
        
        this.ref.detectChanges();
        this.survey[index]["voiceOpenion"] = false;
    }
}
