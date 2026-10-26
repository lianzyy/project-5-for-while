
function hitungNilai() {
    let nama = document.getElementById("nama").value.trim();
    let inputNilai = document.querySelectorAll(".nilai");
    let nilai = [];

    // Memeriksa data yang dimasukkan
    if (nama === "") {
        document.getElementById("hasil").innerHTML =
            '<p class="error">Nama harus diisi!</p>';
        return;
    }

    for (let i = 0; i < inputNilai.length; i++) {
        let angka = inputNilai[i].value;

        if (angka === "" || Number(angka) < 0 ||
            Number(angka) > 100) {
            document.getElementById("hasil").innerHTML =
                '<p class="error">Semua nilai harus diisi antara 0–100!</p>';
            return;
        }

        nilai.push(Number(angka));
    }

    // Perulangan FOR untuk menampilkan setiap nilai
    let daftarNilai = "<h3>Daftar Nilai</h3>";

    for (let i = 0; i < nilai.length; i++) {
        daftarNilai += "Mata Kuliah " + (i + 1) +
            ": " + nilai[i] + "<br>";
    }

    // Perulangan WHILE untuk menjumlahkan nilai
    let total = 0;
    let i = 0;

    while (i < nilai.length) {
        total = total + nilai[i];
        i++;
    }

    let rataRata = total / nilai.length;
    let predikat;

    // Percabangan dengan 5 kondisi
    if (rataRata >= 85) {
        predikat = "A";
    } else if (rataRata >= 75) {
        predikat = "B";
    } else if (rataRata >= 65) {
        predikat = "C";
    } else if (rataRata >= 50) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    // Percabangan tambahan untuk status kelulusan
    let status;

    if (rataRata >= 65) {
        status = '<span class="lulus">Lulus</span>';
    } else {
        status = '<span class="tidak-lulus">Tidak Lulus</span>';
    }

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML =
        "<hr>" +
        "<h3>Hasil Perhitungan</h3>" +
        "Nama: " + nama + "<br>" +
        daftarNilai +
        "Total Nilai: " + total + "<br>" +
        "Rata-rata: " + rataRata.toFixed(2) + "<br>" +
        "Predikat: " + predikat + "<br>" +
        "Status: " + status;
}
