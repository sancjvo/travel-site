import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $(".site-header");
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }

  events() {
    // var that = this;
    // console.log(that.menuContent);
    // that.toggleTheMenu();
    // console.log(this.menuIcon);
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    // this.toggleTheMenu();
    // this.toggleTheMenu();
  }

  toggleTheMenu() {
    // console.log(this);
      this.menuContent.toggleClass('site-header__menu-content--is-visible');
      this.siteHeader.toggleClass("site-header--is-expanded");
      this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
