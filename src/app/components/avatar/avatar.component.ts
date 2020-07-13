import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() imageUrl: string;
  @Input() outline: boolean;
  public defaultImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_sf-YpPF_UUVW8Mf6c4EZQTozu8jxLVTIPA&usqp=CAU';
}
