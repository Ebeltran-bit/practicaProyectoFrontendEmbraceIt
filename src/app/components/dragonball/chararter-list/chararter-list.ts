import { Component, input } from '@angular/core';
import { NgStyle } from "@angular/common";
import type{ Character } from '../../../interfaces/character.interface';


@Component({
  selector: 'dragonball-chararter-list',
  templateUrl: './chararter-list.html',
  imports: [NgStyle],
})

export class ChararterList {
  characters= input.required<Character[]>(); 
  listName= input.required<string>();


  
}
