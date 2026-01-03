// Daftar kata positif
const positif = ["bagus", "baik", "mantap", "suka", "senang", "hebat", "keren", "luar biasa", "wow"];

// Daftar kata negatif
const negatif = ["jelek", "buruk", "benci", "marah", "kecewa", "parah", "tolol", "sedih", "sampah"];

function analisisSentimen() {
    let teks = document.getElementById("inputText").value.toLowerCase();

    let skor = 0;

    // Cek kata positif
    positif.forEach(kata => {
        if (teks.includes(kata)) skor++;
    });

    // Cek kata negatif
    negatif.forEach(kata => {
        if (teks.includes(kata)) skor--;
    });

    let hasil = "";

    if (skor > 0) hasil = "Sentimen POSITIF 😊";
    else if (skor < 0) hasil = "Sentimen NEGATIF 😡";
    else hasil = "Sentimen NETRAL 😐";

    document.getElementById("hasil").innerText = hasil;
}
