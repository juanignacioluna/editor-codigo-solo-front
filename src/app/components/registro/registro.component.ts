import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';


@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.less']
})
export class RegistroComponent implements OnInit {

  userSession="";

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {

    $("#close").hide();
    $("#login").hide();


    if(this.userSession != ""){
        $("#close").show();
    }else{
        $("#login").show();
    }


  }

  cerrarSesion(event){

    $("#close").hide();
    $("#login").show();

  }

  misArchivos(event){
    this.router.navigate(['/misArchivos']);
  }

  home(event){
    this.router.navigate(['/home']);
  }

  login(event){
    this.router.navigate(['/login']);
  }

  registro(event){

    this.router.navigate(['/home'])
    
  }


}