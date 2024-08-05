let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    let h3 = document.querySelector('h3');

    let rancomColor = getRandomColor();
    h3.innerText = rancomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = rancomColor;

    console.log("color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255); // no need to do '+1' since it starts from 0.
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `RGB(${red}, ${green}, ${blue})`;
    return color;
}