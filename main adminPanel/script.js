var visible = false;

$(".display>div").hide();
$("#dashboard").show();


$("button").on("click",function(){
    $(".display>div").hide();
    $($(this).attr("for")).show();
})


function sideCustomization() {
  visible = !visible;
  $("#sidebar").toggle(10, function () {
    if (visible) {
      $("#content").css("margin-left",0)
      $("#content,#content>div,.slider-icon").css("width", "100%");
    } else {
      $("#sidebar").css("width","20%");
      $("#content").css("margin-left",272)
      $("#content,#content>div,.slider-icon").css("width", "80%");
    }
  });
} 

$(".menu-icon").on("click",function(){
    // $(".sidebar").toggle();
    sideCustomization();
})

$("button").on("click",function(){
  visible = !visible;
    $("#sidebar").hide();
    $("#content,#content>div,.slider-icon").css("width", "100%");
    $("#content").css("margin-left",0)
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

// chart section
// 1
(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

// 2
(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions1'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

// 3

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions2'),
    {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();

//4

(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(
    document.getElementById('acquisitions3'),
    {
      type: 'radar',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();