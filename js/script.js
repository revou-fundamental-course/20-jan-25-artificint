// Ini File Javascript

function calculateBmi() {
    // Mengambil elemen input
    const weightInput = document.getElementById('input-berat-badan');
    const heightInput = document.getElementById('input-tinggi-badan');
    const ageInput = document.getElementById('input-usia');

    // Validasi gender
    const genderMale = document.getElementById('male');
    const genderFemale = document.getElementById('female');

    let valid = true; // Status validasi

    // Menghapus pesan error sebelumnya
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Validasi gender
    if (!genderMale.checked && !genderFemale.checked) {
        alert("Silakan pilih jenis kelamin!");
        valid = false;
    }

    // Mengambil elemen hasil
    const resultSection = document.getElementById('result-section');
    const resultBmi = document.getElementById('result-bmi');
    const resultCategory = document.getElementById('result-category');
    const resultMessage = document.getElementById('result-message');
    const adviceMessage = document.getElementById('advice-message');
    const diseaseContainer = document.getElementById('disease-container');
    const diseaseList = document.getElementById('disease-list');
    const konsultasiButton = document.getElementById('konsultasi-button');
    const registrasiButton = document.getElementById('registrasi-button');
    const downloadButton = document.getElementById('download-button');

    // Mengambil nilai input user
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value);
    let age = parseInt(ageInput.value);

    // Fungsi untuk menampilkan error
    function showError(inputElement, message) {
        let error = document.createElement("span");
        error.classList.add("error-message");
        error.style.color = "red";
        error.style.fontSize = "12px";
        error.textContent = message;
        inputElement.parentNode.appendChild(error);
    }

    // Validasi input
    if (!weight || weight < 10 || weight > 300) {
        showError(weightInput, "Berat badan harus antara 10 - 300 kg");
        valid = false;
    }
    if (!height || height < 50 || height > 300) {
        showError(heightInput, "Tinggi badan harus antara 50 - 300 cm");
        valid = false;
    }
    if (!age || age < 5 || age > 120) {
        showError(ageInput, "Usia harus antara 5 - 120 tahun");
        valid = false;
    }

    // Proses berhenti jika ada error atau kesalahan input
    if (!valid) return; 

 // Untuk Mengitung BMI
 let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
 console.log('Calculated BMI:', bmi);

 // Inisialisasi variabel untuk kategori, pesan, saran, penyakit, dan tombol
 let category = "";
 let message = "";
 let advice = "";
 let diseases = [];
 let showKonsultasi = false;
 let diseaseTitle = "";

 // menentukan kategori BMI dan informasi terkait
 if (bmi < 18.5) {
     category = "Berat Badan Kurang";
     message = "Anda berada dalam kategori Underweight. Disarankan meningkatkan asupan kalori dan konsultasi dengan ahli gizi.";
     advice = "Konsumsi makanan tinggi protein dan karbohidrat kompleks, serta olahraga untuk meningkatkan massa otot.";
     diseases = ["Anemia", "Osteoporosis", "Gangguan Imun"];
     showKonsultasi = true;
 } else if (bmi < 25) {
     category = "Berat Badan Ideal";
     message = "Anda berada dalam kategori Normal. Pertahankan pola hidup sehat!";
     advice = "Jaga pola makan seimbang, tetap aktif berolahraga, dan cukup tidur setiap hari.";
     diseases = [];
 } else if (bmi < 30) {
     category = "Berat Badan Lebih";
     message = "Anda berada dalam kategori Overweight. Disarankan mengurangi kalori dan rutin berolahraga.";
     advice = "Kurangi konsumsi makanan tinggi gula dan lemak jenuh, serta lakukan latihan kardiovaskular secara rutin.";
     diseases = ["Diabetes", "Hipertensi"];
     diseaseTitle = "Beberapa penyakit yang berasal dari kegemukan";
     showKonsultasi = true;
 } else {
     category = "Obesitas";
     message = "Anda berada dalam kategori Obesitas. Sebaiknya berkonsultasi dengan ahli gizi dan dokter untuk penanganan lebih lanjut.";
     advice = "Fokus pada pola makan sehat dengan defisit kalori, tingkatkan aktivitas fisik, dan hindari makanan olahan.";
     diseases = ["Diabetes", "Hipertensi", "Sakit Jantung", "Osteoarthritis"];
     diseaseTitle = "Beberapa penyakit yang berasal dari kegemukan";
     showKonsultasi = true;
 }

 console.log('BMI Category:', category);
 console.log('Diseases:', diseases);

 // Menampilkan hasil BMI
 resultCategory.textContent = category;
 resultBmi.textContent = bmi;
 resultMessage.textContent = message;
 adviceMessage.textContent = advice;

 // Memastikan hasil BMI dan tombol ditampilkan
 resultSection.classList.remove("hidden");
 downloadButton.classList.remove("hidden");

 // Menampilkan atau sembunyikan bagian penyakit
 if (diseases.length > 0) {
     diseaseContainer.innerHTML = `<h4>${diseaseTitle}</h4>`;
     diseaseList.innerHTML = diseases.map(d => `<li>${d}</li>`).join('');
     diseaseContainer.classList.remove("hidden");
 } else {
     diseaseContainer.innerHTML = "";
     diseaseList.innerHTML = "";
     diseaseContainer.classList.add("hidden");
 }

 // menampilkan atau menyembunyikan tombol Konsultasi dan Registrasi jika diperlukan
 if (showKonsultasi) {
     konsultasiButton.classList.remove("hidden");
     registrasiButton.classList.remove("hidden");
 } else {
     konsultasiButton.classList.add("hidden");
     registrasiButton.classList.add("hidden");
 }

}

// Fungsi reset formulir
function resetForm() {
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('input-usia').value = '';
    document.getElementById('result-category').textContent = '';
    document.getElementById('result-bmi').textContent = '0';
    document.getElementById('result-message').textContent = '';
    document.getElementById('advice-message').textContent = '';
    document.getElementById('disease-container').innerHTML = '';
    document.getElementById('disease-list').innerHTML = '';
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Menyembunyikan hasil BMI dan tombol
    document.getElementById('result-section').classList.add("hidden");
    document.getElementById('download-button').classList.add("hidden");
    document.getElementById('konsultasi-button').classList.add("hidden");
    document.getElementById('registrasi-button').classList.add("hidden");
}
