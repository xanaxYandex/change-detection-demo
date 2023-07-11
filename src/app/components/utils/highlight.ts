import {ElementRef} from '@angular/core';

export function hightlight(el: ElementRef, className = 'checked') {
  const a = el.nativeElement.querySelector('a');
  a.classList.add(className);
  setTimeout(() => {
    a.classList.remove(className);
  }, 500);
}
