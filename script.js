function askName() {
    var date = new Date();
    var hours = date.getHours();
    var greet = "";

    if (hours >= 4 && hours <= 10) {
        greet = "Selamat Pagi";
    } else if (hours >= 11 && hours <= 17) {
        greet = "Selamat Siang"
    } else {
        greet = "Selamat Malam"
    }

    let name = sessionStorage.getItem('name');

    if (name === null) {
        name = prompt("Please enter your name");
    }
    
    if (name != null) {
        document.getElementById("showName").innerHTML = greet + ", " + name + "! Bagaima kabar kamu?";
    } else {
        document.getElementById("showName").innerHTML = "Welcome, Stranger!";
    }
}

function countSilinder() {
    // luas permukaan
    var jariSilinder = document.getElementById("jariSilinder").value;
    var tinggiSilinder = document.getElementById("tinggiSilinder").value;
    var luasPermukaan = 2 * Math.PI * jariSilinder * (jariSilinder + tinggiSilinder);
    var volume = tinggiSilinder * Math.PI * (jariSilinder ** 2);
    document.getElementById("luasPermukaanSilinder").innerHTML = "Luas Permukaan : " + luasPermukaan.toFixed(2) + " m2";
    document.getElementById("volumeSilinder").innerHTML = "Volume : " + volume.toFixed(2) + "m3";
}

function countKerucut() {
    // luas permukaan
    var jariKerucut = document.getElementById("jariKerucut").value;
    var tinggiKerucut = document.getElementById("tinggiKerucut").value;
    var pelukisKerucut = document.getElementById("pelukisKerucut").value;
    var luasPermukaan = Math.PI * jariKerucut * (jariKerucut + pelukisKerucut);
    var volume = (1/3) * Math.PI * (jariKerucut ** 2) * tinggiKerucut;
    document.getElementById("luasPermukaanKerucut").innerHTML = "Luas Permukaan : " + luasPermukaan.toFixed(2) + " m2";
    document.getElementById("volumeKerucut").innerHTML = "Volume : " + volume.toFixed(2) + "m3";
}

function countBola() {
    // luas permukaan
    var jariBola = document.getElementById("jariBola").value;
    var luasPermukaan = 4 * Math.PI * (jariBola ** 2);
    var volume = (4/3) * Math.PI * (jariBola ** 3);
    document.getElementById("luasPermukaanBola").innerHTML = "Luas Permukaan : " + luasPermukaan.toFixed(2) + " m2";
    document.getElementById("volumeBola").innerHTML = "Volume : " + volume.toFixed(2) + "m3";
}