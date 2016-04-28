var app = angular.module('routerApp', ['ngRoute']);
// this is sourced in our html 'angular-route'. ng-route is the name of the package.

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html', // a 'partial' is just grabbing html elements, not a full file.
      controller: 'HomeController',
      controllerAs: 'home' // the controller that will control the content we grab.
    })
    .when('/aboutUs', {
      templateUrl: 'views/aboutUs.html',
      controller: 'AboutUsController',
      controllerAs: 'about'

    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })

    $locationProvider.html5Mode(true); //this allows us to take out the # in our html, need to add a companion base href in the index.html for it to function

  }])

  app.controller('HomeController', function(){
      this.message = "Sometimes you learn more from your mistakes than you do from your masterpieces. You can do anything here - the only pre-requisite is that it makes you happy. You don't have to be crazy to do this but it does help. Just beat the devil out of it.";
  })

  app.controller('AboutUsController', function(){
      this.message = "Just think about these things in your mind and drop em' on canvas. A tree needs to be your friend if you're going to paint him. If you hypnotize it, it will go away. This is the way you take out your flustrations. Even the worst thing we can do here is good. La- da- da- da- dah. Just be happy.";
  })

  app.controller('ContactController', function(){
      this.message = "Every highlight needs it's own personal shadow. Water's like me. It's laaazy ... Boy, it always looks for the easiest way to do things There are no mistakes. You can fix anything that happens. Use what you see, don't plan it. Let's build some happy little clouds up here. Work on one thing at a time. Don't get carried away - we have plenty of time.";
  })

  app.controller('MainController', function(){

  })
