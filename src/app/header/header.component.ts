import { Component, OnInit } from '@angular/core';
declare let $;

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.toggleClick();
    this.headerSticky();
  }

  toggleClick() {
    $('.navbar-toggler').click(function () {
      $('.wrapper').toggleClass('open');
      $('.navbar-collapse').toggleClass('show');
      $(this).toggleClass('collapsed');
    });

    $('.navbar-collapse li a').click(function () {
      $('.wrapper').removeClass('open');
      $('.navbar-collapse').removeClass('show');
      $('.navbar-toggler').addClass('collapsed');
    });
  }

  headerSticky() {
    var header = document.querySelector('header');
    //Sticky header
    window.onscroll = function () {
      window.scrollY > 300
        ? header.classList.add('fixed')
        : header.classList.remove('fixed');
    };
  }
}
