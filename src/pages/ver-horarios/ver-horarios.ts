import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
import {AuthService} from "../../services/auth.service";
import {snapshotToArray} from "../reservas/reservas";
import {GestionarReservaPage} from "../gestionar-reserva/gestionar-reserva";

/**
 * Generated class for the VerHorariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-horarios',
  templateUrl: 'ver-horarios.html',
})
export class VerHorariosPage {
  fechas = [];
  ref = firebase.database().ref('fechasDisponibles/');

  fechas2 = [];  //Lunes
  fechas3 = [];  //Martes
  fechas4 = [];  //Miércoles
  fechas5 = [];  //Jueves
  fechas6 = [];  //Viernes
  fechas7 = [];  //Sábado
  fechas8 = [];  //Domingo

  ref2 = firebase.database().ref('prueba/Lunes/');  //Lunes
  ref3 = firebase.database().ref('prueba/Martes/'); //Martes
  ref4 = firebase.database().ref('prueba/Miércoles//'); //Martes
  ref5 = firebase.database().ref('prueba/Jueves/'); //Martes
  ref6 = firebase.database().ref('prueba/Viernes/'); //Martes
  ref7 = firebase.database().ref('prueba/Sábado/'); //Martes
  ref8 = firebase.database().ref('prueba/Domingo/'); //Martes

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: AuthService) {
    this.ref.on('value', resp => {
      this.fechas = [];
      this.fechas = snapshotToArray(resp);
    });

    this.ref2.on('value', resp => {
      this.fechas2 = [];
      this.fechas2 = snapshotToArray(resp);
    });

    this.ref3.on('value', resp => {
      this.fechas3 = [];
      this.fechas3 = snapshotToArray(resp);
    });

    this.ref4.on('value', resp => {
      this.fechas4 = [];
      this.fechas4 = snapshotToArray(resp);
    });

    this.ref5.on('value', resp => {
      this.fechas5 = [];
      this.fechas5 = snapshotToArray(resp);
    });

    this.ref6.on('value', resp => {
      this.fechas6 = [];
      this.fechas6 = snapshotToArray(resp);
    });

    this.ref7.on('value', resp => {
      this.fechas7 = [];
      this.fechas7 = snapshotToArray(resp);
    });

    this.ref8.on('value', resp => {
      this.fechas8 = [];
      this.fechas8 = snapshotToArray(resp);
    });
  }

  selectFecha(key,fecha){
    this.navCtrl.push(GestionarReservaPage, {
      key:key,
      fecha:fecha
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerHorariosPage');
  }


}
