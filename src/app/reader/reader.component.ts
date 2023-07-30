import { Component } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent {
  constructor() {}
  text = "Dies ist ein Beispiel";
  words: any[] = [];

  translatedtext = "This\nis\na\nExample";
  translatedwords: any[] = []

  html_word  = "Wort";
  html_translatedword = "Word";

  count = 0;

  ngOnInit(): void {
    this.words = this.text.split(/ |\n/);
    this.translatedwords = this.translatedtext.split("\n");
    this.html_word = this.words[0];
    this.html_translatedword = this.translatedwords[0]
  }
  

  forward(){
    if(this.count < this.words.length -1){
      this.count++;
    }
    this.html_word = this.words[this.count]
    this.html_translatedword = this.translatedwords[this.count]
  }

  backward(){
    if(this.count > 0){
      this.count--;
    }
    this.html_word = this.words[this.count]
    this.html_translatedword = this.translatedwords[this.count]
  }
}
