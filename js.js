
 
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mike', 'mona', 'Mark', 'mera', 'amed', 'mooe'],
        datasets: [{
            label: 'Summary of repository activity',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
 



$("#calbtn").click(function() {
     
    $('html,body,.tab-content').animate({
        scrollTop: $(".cal").offset().top},
        'slow')
});
$("#repobtn").click(function() {
     
    $('html,body,.tab-content').animate({
        scrollTop: $(".rp").offset().top},
        'slow')
});
$("#filesbtn").click(function() {
     
    $('html,body,.tab-content').animate({
        scrollTop: $(".files").offset().top},
        'slow')
});
