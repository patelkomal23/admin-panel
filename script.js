

$(".display>div").hide();
$("#dashboard").show();


$("button").on("click",function(){
    $(".display>div").hide();
    $($(this).attr("for")).show();
})
var visible = false;

function sideCustomization() {
  visible = !visible;
  $("#sidebar").toggle(10, function () {
    if (visible) {
      $("#content,#content>div,.slider-icon").css("width", "100%");
    } else {
      $("#content,#content>div,.slider-icon").css("width", "100%");
    }
  });
} 

$(".slider-icon").on("click",function(){
    $(".sidebar").toggle();
    sideCustomization();
})

$("button").on("click",function(){
    $("#sidebar").hide()
    $("#content").css("width","100%")
    $(".slider-icon").css("width","100%")
})



// Counter

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 4000,
        easing:"swing",
        step:function (now) {
          now = Number(Math.ceil(now)).toLocaleString('en');
          $(this).text(now);
        },
      }
    );
});

// Counter over


// dashboard chart
// 1
var options = {
  chart: {
    height: 280,
    type: "area"
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2]
    }
  ],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100]
    }
  },
  xaxis: {
    categories: [
      "01 Jan",
      "02 Jan",
      "03 Jan",
      "04 Jan",
      "05 Jan",
      "06 Jan",
      "07 Jan"
    ]
  }
};

var chart = new ApexCharts(document.querySelector("#chart-db"), options);

chart.render();

// 2

var options = {
  series: [{
  data: [21, 22, 10, 28, 16, 21, 13, 30]
}],
  chart: {
  height: 350,
  type: 'bar',
  events: {
    click: function(chart, w, e) {
      // console.log(chart, w, e)
    }
  }
},
// colors: colors,
plotOptions: {
  bar: {
    columnWidth: '45%',
    distributed: true,
  }
},
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
xaxis: {
  categories: [
    ['John', 'Doe'],
    ['Joe', 'Smith'],
    ['Jake', 'Williams'],
    'Amber',
    ['Peter', 'Brown'],
    ['Mary', 'Evans'],
    ['David', 'Wilson'],
    ['Lily', 'Roberts'], 
  ],
  labels: {
    style: {
      // colors: colors,
      fontSize: '12px'
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart-db-1"), options);
chart.render();