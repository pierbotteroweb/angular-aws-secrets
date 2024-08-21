import { Component, OnInit } from '@angular/core';
import { SecretsService } from './secrets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-aws-secrets';
  constructor(
    private secretsServices: SecretsService,
  ) { }

  ngOnInit(): void {

    console.log('AppComponent initialized');
    this.secretsServices.getSecret('apien/test').then((secret) => {
      console.log(secret);
    })
  }

}
