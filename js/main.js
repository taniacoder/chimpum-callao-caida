(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

var canadamap = document.getElementById("canada-map"),
  provinceInfo = document.getElementById("provinceInfo"),
  allProvinces = canadamap.querySelectorAll("g");
  canadamap.addEventListener("click", function(e){ 
    var province = e.target.parentNode;
    if(e.target.nodeName == "path") {
    for (var i=0; i < allProvinces.length; i++) {
      allProvinces[i].classList.remove("active");
    }
    province.classList.add("active");
    var provinceName = province.querySelector("title").innerHTML,
    provincePara = province.querySelector("desc p");
    sourceImg = province.querySelector("img"),
    imgPath = "images/";
    provinceInfo.innerHTML = "";
    provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h3>"+provinceName+"</h3><p>"+provincePara.innerHTML+"</p>");
    provinceInfo.classList.add("show");
    }
  })

///hi
Highcharts.chart('container', {

    title: {
        text: 'Votaciones para alcalde provincial'
    },

    subtitle: {
        text: '(Chimpum y rivales más cercanos)'
    },

    xAxis: {
        categories: ['1995', '1998', '2002', '2006', '2010', '2014'],
        labels: {
            x: -10
        }
    },
    yAxis: {
        title: {
            text: 'Percent'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },


    series: [{
        name: 'ChimpumCallao',
        data: [57.9, 67.2, 30.8, 48.9, 47.1, 39.3],
        color:'#10ad22'
    },     {
        name: 'Cambio 90',
        data: [36.9, null, null, null, null, null],
        color: '#E87743'
     },
     {
        name: 'Vamos Vecino',
        data: [null, 15.9, null, null, null, null],
        color: '#0000F3'
     },
     {
        name: 'APRA ',
        data: [null, null, 23.7, null, null, null],
        color: '#FE0002'
    },
     {
        name: 'Mar Callao',
        data: [null, null, null, 19.3, 17.6, null],
        color: '#0395CE'
     },
     {
        name: 'Por Ti Callao ',
        data: [null, null, null, null, null, 17.6],
        color: '#DD2773'
   }]
});
  ///hi
  Highcharts.chart('container-1', {
    title: {
        text: 'Votaciones para gobernador regional'
    },

    subtitle: {
        text: '(Chimpum y rivales más cercanos)'
    },

    xAxis: {
        categories: ['2002', '2006', '2010', '2014'],
        labels: {
            x: -10
        }
    },
    yAxis: {
        title: {
            text: 'Percent'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },


    series: [{
        name: 'ChimpumCallao',
        data: [20, 49.6, 49.8, 39.6],
        color:'#10ad22'
    },     {
        name: 'Peru Posible',
        data: [36.9, null, null, null],
        color: '#FECE02'
     },
     {
        name: 'APRA ',
        data: [24.1, null, null, null],
        color: '#FE0002'
    },
     {
        name: 'Mar Callao',
        data: [null, 33.4, 30.9, null],
        color: '#0395CE'
     },
     {
        name: 'Accion Popular ',
        data: [ null, null, null,  21.2],
        color: '#DD2773'
   }]
});