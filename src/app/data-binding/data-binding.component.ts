import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit{

  currentValue: string = ''
  valueSaved: string = ''
  url: string = 'http://loiane.com'
  urlImage = 'https://vidafullstack.com.br/angular/novidades-no-angular-v14/'
  courseAngular: boolean = true
  isMouseOver: boolean = false
  name: string = 'abc'
  courseName: string = 'Angular'

  getValue() {
    return 1
  }

  getLikeCourse() {
    return true
  }

  buttonClicked() {
    alert("Botão clicado")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement>evento.target).value;
  }

  saveValue(value: string) {
    this.valueSaved = value
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onChangedValue(event: number) {
    console.log(event);

  }

  constructor() {}

  ngOnInit() {
  }
}
