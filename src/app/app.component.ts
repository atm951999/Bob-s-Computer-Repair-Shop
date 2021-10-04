/*
============================================
; Title: Assignment 9.3
; Author: Professor Krasso
; Date: 03 October 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Import
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bobs-computer-repair-shop';
}
