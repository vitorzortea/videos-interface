import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class JasonVideoService {
  video: Video

  constructor() { }

  setTest(){
    this.video = {
      title: '',
      button: '#&6xE!gwPAYq',
      url: '',
      child: []
    }
  }
  printVideos(){
    console.log(this.video);
  }
  deleteVideo(senha, video=this.video, dad=this.video, index=0){
    if(video.button && video.button == senha){ dad.child.splice(index, 1) }
    if(video.child){ video.child.forEach((e, i)=>{this.deleteVideo(senha, e, video, i);}) }
  }
}
