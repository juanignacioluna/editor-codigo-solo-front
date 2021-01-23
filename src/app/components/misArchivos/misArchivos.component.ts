import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';

@Component({
    selector: 'app-misArchivos',
    templateUrl: './misArchivos.component.html',
    styleUrls: ['./misArchivos.component.less']
})
export class MisArchivosComponent implements OnInit {


  userSession;

  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }


  ngOnInit() {
    
  }

  cerrarSesion(event){

    $("#close").hide();
    $("#login").show();

  }

  login(event){
    this.router.navigate(['/login']);
  }

  home(event){
    this.router.navigate(['/home']);
  }

  new(event){
    this.router.navigate(['/new']);
  }

  archivo(event){
    this.router.navigate(['/archivo']);
  }


}