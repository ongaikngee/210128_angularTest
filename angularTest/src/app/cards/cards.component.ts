import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  title = 'House of Cards';
  posts = [
    { title: 'The king of diamonds', content: 'Traditionally armed with an ax, while the other three kings are armed with swords; thus, the king of diamonds is sometimes referred to as "the man with the axe".' },
    {
      title: 'The king of hearts',
      content:
        'Known as the Suicide kings, as is typically shown with a sword behind his head, making him appear to be stabbing himself.',
    },
  ];
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.myForm = this.fb.group({
      title: '',
      content: ''
    });
  }

  onSubmit(): void {
    let newCard = {
      title: this.myForm.value.title,
      content: this.myForm.value.content
    }
    this.posts.push(newCard);
  }

  deleteCard(index): void {
    this.posts.splice(index,1)
  }
}
