let boundary_devs = document.querySelectorAll("#maze .boundary");
let start = document.querySelector("#start");

let end = document.querySelector("#end");
let color = boundary_devs.forEach((e) => e.style.backgroundColor);

console.log(color);


start.addEventListener('click', () => {
    
    boundary_devs.forEach((boundary) => {
    
        boundary.onmouseover = () => {

            boundary_devs.forEach((boundary) => {

                boundary.style.backgroundColor = 'red';

            });
            refresh();
        }

    });

    end.addEventListener('mouseover', () => {
        alert('You win !');
        refresh();
    });

});




function refresh() {
    location.reload();
}

