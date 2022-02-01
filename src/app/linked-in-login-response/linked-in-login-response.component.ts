import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: 'app-linked-in-login-response',
  templateUrl: './linked-in-login-response.component.html',
  styleUrls: ['./linked-in-login-response.component.css']
})
export class LinkedInLoginResponseComponent implements OnInit {

  linkedInToken = "AQUDvU7R5a9xtxcR0FOKrogm_jl4VD_eQ7aU7DI4nogOQTvhLW6cfbTcDZDyIKBa877OTwpE2aGogsNY8vlfod2_m4GAeRG2zDGwd-_-ZFaA2nTlovFamWRAitrEbigWL7dVHTe3NOlE4wWzB0yCjcDCkY05E62fJI6hHpAPSg4xLn0k5YeO2OUtDfiknvFSMJzZ1rcLKO_rP6BZxxjgVspTbrmK4aW3Aiawvc3AMP41IYelxpytNgDs6nkWyDiy5vmr-fmvJsWaQjlZ2Lp8TTrwT517JIjQqr9lrMRjSuNd8XIa1KXpeft4krEQ-KpPj4dGOpreBwFK8dx49IuBgc26LdvRfQ";
  
  constructor(private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
  }

}
