import { Component, Input } from "@angular/core";
import { Post } form '../post.model'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {
  //     title: 'First Post',
  //     content: 'This is the first posts content'
  //   },
  //   {
  //     title: 'Second Post',
  //     content: 'This is the second posts content'
  //   },
  //   {
  //     title: 'Third Post',
  //     content: 'This is the third posts content'
  //   },
  // ];
  @Input() posts: Post[] = [];
}
