// Data ide cemilan
const snacks = [
    { 
        nama: "Pisang Coklat (Piscok)", 
        deskripsi: "Pisang dibalut kulit lumpia dengan isian coklat lumer, digoreng garing." 
    },
    { 
        nama: "Tahu Walik", 
        deskripsi: "Tahu pong dibalik dan diisi adonan bakso ayam, gurih dan renyah dicocol kecap pedas!" 
    },
    { 
        nama: "Makaroni Telur (Maklor)", 
        deskripsi: "Makaroni direbus lalu digoreng pakai telur kocok dan taburan bumbu balado." 
    },
    { 
        nama: "Roti Bakar Keju Milo", 
        deskripsi: "Roti tawar dipanggang pakai margarin, ditaburi keju parut dan bubuk Milo melimpah." 
    }
];

const container = document.getElementById('snack-container');
const btn = document.getElementById('random-btn');

// Fungsi untuk menampilkan cemilan acak
function showRandomSnack() {
    const randomIndex = Math.floor(Math.random() * snacks.length);
    const snack = snacks[randomIndex];
    
    container.innerHTML = `
        <div class="snack-card">
            <h2>${snack.nama}</h2>
            <p>${snack.deskripsi}</p>
        </div>
    `;
}

// Tampilkan cemilan pertama kali saat halaman dimuat
showRandomSnack();

// Ganti cemilan saat tombol diklik
btn.addEventListener('click', showRandomSnack);
