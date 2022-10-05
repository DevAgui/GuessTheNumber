import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appWizard]'
  })

  export class WizardDirective{

    @HostListener('mouseenter') guessedCorrectly() {

        this.appwizard(this.appWizard || 'yellow');
      }

      private appwizard(url: string) {
        this.el.nativeElement.style.styleUrls = '';
      }
      @Input() appWizard = '../../assets/guessthenumber.png';

      constructor(
        private el: ElementRef) {
        }
  }