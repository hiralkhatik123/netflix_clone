const mobile = document.getElementById('mobile');

    mobile.addEventListener('click', function onClick(event) {
    const Month = document.getElementById('Month');

    Month.style.color = 'red';
});

const basic = document.getElementById('basic');

basic.addEventListener('click', function onClick(event) {

    const vidio = document.getElementById('vidio');

    vidio.style.color = 'blue';
});



const Standard = document.getElementById('Standard');

Standard.addEventListener('click', function onClick(event) {

    const restrore = document.getElementById('restrore');
    restrore.style.color = 'red'
});

const Premium = document.getElementById('Premium');

Premium.addEventListener('click', function onClick(event) {
    const phone = document.getElementById('phone');
    phone.style.color = 'red'

    const tablet = document.getElementById('tablet');
    tablet.style.color = 'red'

    const computer = document.getElementById('computer');
    computer.style.color = 'red'

    const tv = document.getElementById('tv');
    tv.style.color = 'red'
});