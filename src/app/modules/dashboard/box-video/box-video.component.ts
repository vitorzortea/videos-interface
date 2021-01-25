import { Component, Input, OnInit } from '@angular/core';
import { JasonVideoService } from 'src/app/services/jason-video.service';

@Component({
  selector: 'app-box-video',
  templateUrl: './box-video.component.html',
  styleUrls: ['./box-video.component.styl']
})
export class BoxVideoComponent implements OnInit {

  @Input() videoSelect;
  idVideo:string;

  constructor(
    public teste: JasonVideoService
  ) { }

  ngOnInit(){
    this.idVideo = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  }

  addChild(){
    this.videoSelect.child.push( { button: '', url: '', child: [] } );
  }

  deleteMovie(){
    const senha = 'xN6SK8HT&7@6'
    this.videoSelect.optionTitle = senha;
    this.teste.deleteVideo(senha)
  }

  viewVideos(url:string){
    const boxFrame = document.querySelector('#'+this.idVideo);
    let iframe;
    if(url.match('youtube')){ iframe = this.youtube(url); }
    else if(url.match('vimeo')){ iframe = this.vimeo(url); }
    else if( url.match('.mp4') || url.match('WebM') || url.match('.ogg') ){ iframe = this.videoTag(url); }
    else { iframe = 'Url invalid'; }
    boxFrame.innerHTML = iframe;
  }

  youtube(url:string):string{
    const id = url.substr((url.indexOf('v=') + 2), 11)
    return '<iframe src="https://www.youtube.com/embed/'+id+'" style="width: 100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  }

  vimeo(url:string):string{
    const id = url.substr((url.lastIndexOf("/") + 1), 9)
    return '<iframe src="https://player.vimeo.com/video/'+id+'" style="width: 100%"></iframe>'
  }

  videoTag(url:string):string{
    return '<video src="'+url+'" webkit-playsinline="" playsinline="" preload="metadata" controls="" style="width: 100%"></video>'
  }

}
