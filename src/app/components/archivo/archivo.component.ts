import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser'
import { ChangeDetectorRef } from '@angular/core';
import $ from 'jquery';
import Chart from 'chart.js';
import CodeFlask from 'codeflask';

@Component({
    selector: 'app-archivo',
    templateUrl: './archivo.component.html',
    styleUrls: ['./archivo.component.less']
})
export class ArchivoComponent implements OnInit {

  userSession="";

  id;

  user;

  info;

  tipo="js";



  flask;




  constructor(public activatedRoute:ActivatedRoute, public router:Router, private sanitized: DomSanitizer, private cdr: ChangeDetectorRef) { }
  
  

  ngOnInit() {


    if(this.userSession != ""){
        $("#close").show();
    }else{
        $("#login").show();
    }

    this.cargarArchivo()


  }


  editar(event){

  }


  borrar(event){

    this.router.navigate(['/misArchivos'])

  }



  cargarArchivo(){

    this.flask = new CodeFlask('#code', { 
      language: this.tipo,
      lineNumbers: true,
    });

    this.flask.updateCode(`
    import { Component, OnInit } from '@angular/core';
    import { Router, ActivatedRoute } from '@angular/router';
    import { HttpClient } from '@angular/common/http';
    import { DomSanitizer } from '@angular/platform-browser'
    import { ChangeDetectorRef } from '@angular/core';
    import $ from 'jquery';
    import Chart from 'chart.js';
    import CodeFlask from 'codeflask';`);

  }







  cerrarSesion(event){

    $("#close").hide();
    $("#login").show();

  }

  login(event){
    this.router.navigate(['/login']);
  }

  misArchivos(event){
    this.router.navigate(['/misArchivos']);
  }

  home(event){
    this.router.navigate(['/home']);
  }


}