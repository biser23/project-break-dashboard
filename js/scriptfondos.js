function photoR(){
    const fotos = [
        'url("./photos/1.jpg")',
        'url("./photos/2.jpg")',
        'url("./photos/3.jpg")',
        'url("./photos/4.jpg")',
        'url("./photos/5.jpg")',
        'url("./photos/6.jpg")',
        'url("./photos/7.jpg")',
        'url("./photos/8.jpg")',
        'url("./photos/9.jpg")',
        'url("./photos/10.jpg")',
        'url("./photos/11.jpg")',
    ]
    const section =document.querySelector('section')
    const bg = fotos[Math.floor(Math.random() * fotos.length)];
    section.style.backgroundImage = bg;
    }   

    setInterval(photoR, 3000)
