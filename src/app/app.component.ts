import { Component } from '@angular/core';
import { from } from 'rxjs';
import{CurrencyService} from 'src/app/services/currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public currencyService:CurrencyService){}
  title = 'test0';
  GetCurrencyList()
  {
    this.currencyService.GetCurrencyList().subscribe(
      result=>{
      console.log(result);
      },er=>{
        alert(er.massege);
      }
    );
  }
}


