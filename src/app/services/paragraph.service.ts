import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParagraphService {
  constructor() {}
  inputField = document.querySelector('.wrapper .input-field');
  getParagraphs() {
    let paragraphs = [
      '80 days around the world, we'+"'"+'ll find a pot of gold just sitting where the rainbow'+"'"+'s ending. Time -- we'+"'"+'ll fight against the time, and we'+"'"+'ll fly on the white wings of the wind.',
      'I never spend much time in school but I taught ladies plenty. It'+"'"+'s true I hire my body out for pay, hey hey. Ive gotten burned over Cheryl Tiegs, blown up for Raquel Welch. But when I end up in the hay it'+"'"+'s only hay, hey hey.',
      'This is my boss, Jonathan Hart, a self-made millionaire, he'+"'"+'s quite a guy. This is Mrs H., she'+"'"+'s gorgeous, she'+"'"+'s one lady who knows how to take care of herself.',
      'Children of the sun, see your time has just begun, searching for your ways, through adventures every day.',
      'Mutley, you snickering, floppy eared hound. When courage is needed, you'+"'"+'re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. ',
    ];
    let randomIndex = Math.floor(Math.random() * paragraphs.length);
    let paragraph = paragraphs[randomIndex].split('');
    return paragraph;
  }
}
