import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor() {
  }

  ngOnInit() {

    this.stocks = [
      new Stock(1, '第一只股票', 1.99, 2.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(2, '第二只股票', 1.99, 4.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(3, '第三只股票', 1.99, 4.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(4, '第四只股票', 1.99, 2.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(5, '第五只股票', 1.99, 3.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(6, '第六只股票', 1.99, 3.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(7, '第七只股票', 1.99, 3.5, '这是第一只股票', ['互联网', 'IT']),
      new Stock(8, '第八只股票', 1.99, 3.5, '这是第一只股票', ['互联网', 'IT'])
    ];

  }

}

export class Stock {
  constructor(public id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
