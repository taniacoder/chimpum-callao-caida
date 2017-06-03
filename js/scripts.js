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
    imgPath = "assets/";
    provinceInfo.innerHTML = "";
    provinceInfo.insertAdjacentHTML("afterbegin", "<img src="+imgPath + sourceImg.getAttribute('xlink:href')+" alt='"+sourceImg.getAttribute('alt')+"'><h1>"+provinceName+"</h1><p>"+provincePara.innerHTML+"</p>");
    provinceInfo.classList.add("show");
    }
  })

///hi
  Highcharts.chart('container-1', {
    chart: {
        type: 'area',
        spacingBottom: 30
    },
    title: {
        text: 'Fruit consumption *'
    },
    subtitle: {
        text: '* Jane\'s banana consumption is unknown',
        floating: true,
        align: 'right',
        verticalAlign: 'bottom',
        y: 15
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    xAxis: {
        categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
    },
    yAxis: {
        title: {
            text: 'Y-Axis'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + this.y;
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [0, 1, 4, 4, 5, 2, 3, 7]
    }, {
        name: 'Jane',
        data: [1, 0, 3, null, 3, 1, 2, 1]
    }]
});

  ///hi
  Highcharts.chart('container', {
    chart: {
        type: 'area',
        spacingBottom: 30
    },
    title: {
        text: 'Fruit consumption *'
    },
    subtitle: {
        text: '* Jane\'s banana consumption is unknown',
        floating: true,
        align: 'right',
        verticalAlign: 'bottom',
        y: 15
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    xAxis: {
        categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
    },
    yAxis: {
        title: {
            text: 'Y-Axis'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.x + ': ' + this.y;
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [0, 1, 4, 4, 5, 2, 3, 7]
    }, {
        name: 'Jane',
        data: [1, 0, 3, null, 3, 1, 2, 1]
    }]
});