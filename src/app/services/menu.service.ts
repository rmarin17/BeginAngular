import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    /*let arr = ['Ricardo', 'Marin'].map(x => x.length);*/
    return timer(500)
      .pipe(
        map(() => {
          return [
            {
              chef: 'Ricardo M', date: new Date(),
              img: 'https://t2.rg.ltmcdn.com/es/images/0/8/9/img_pan_para_hamburguesa_28980_orig.jpg'
            },
            {
              chef: 'Andres', date: new Date(),
              img: 'https://cocina-casera.com/wp-content/uploads/2011/10/perrito-caliente.jpg'
            },
            {
              chef: 'Juan', date: new Date(),
              img: 'https://recipes.timesofindia.com/photo/53110049.cms?imgsize=148092'
            },
            { chef: 'Camila', date: new Date(), img: '' },
            { chef: 'Jordan', date: new Date(), img: '' },
            { chef: 'Alejandra', date: new Date(), img: '' }
          ];
        })
      );
  }

}



export class Menu {
  constructor(public img: string,
    public chef: string,
    public date: Date) { }
}
