//Code pour la navigation dans les menus, apparition et disparition de div.
(function(){ //fonction qui s'auto appelle pour rester dans un scope local
var menu = document.getElementById('menu');
var as = menu.getElementsByTagName('li');
      for(i=0; i<as.length; i++){
          as[i].addEventListener('click', function(e){
              var li=this;
              var ul=this.parentNode;
          //verifie si l'element contient la class active
              if (li.classList.contains('active')){
                return false;
              }
          //J'efface la class active de ma liste
              ul.querySelector('li .active').classList.remove('active');

          //j'ajoute la class active a l'onglet selectionner
              li.firstChild.classList.add('active');

          //Je retire la class active sur la section active
              document.getElementsByTagName('body')[0].querySelector('.content.active').classList.remove('active');

          //j'ajoute la class active sur le contenue correspondante
          //je prends l'ancre a la fin de mon lien qui correspond à mes div.
              var attrHref = this.getElementsByTagName('a')[0].getAttribute('href').split("#")[1];
              document.getElementById(attrHref).classList.add('active');
            }, false);
        };

//Code pour le bouton service dans la page accueil.
var bouton = document.getElementById('btn');
var btn = bouton.getElementsByTagName('a')
       for(y=0;y<btn.length;y++){
          btn[y].addEventListener('click', function(ev){
              document.getElementById('home').classList.remove('active');
              document.getElementById('service').classList.add('active');
              document.getElementById('base').classList.remove('active');
              document.getElementById('b').classList.add('active');
            })
          }
})()
