const data = [12, 444, 54643, 3155, 667543, 8637, 0, 369, 7516, 335];

// Menentukan panjang maksimum yang dapat dimuat kolom
const maxLength = data.reduce((max, current) => {
  return Math.max(max, current.toString().length);
}, 0);

// Menambahkan bintang pada setiap angka yang tidak sepanjang panjang maksimum kolom
const output = data.map((num) => {
  return num.toString().padStart(maxLength, '*');
});

// Membagi angka-angka ke dalam tabel secara berurutan
const table = [];
for (let i = 0; i < output.length; i += 4) {
  table.push(output.slice(i, i + 4));
}

// Menambahkan pemisah (|) antar kolom
const result = table.map((row) => {
  return row.join('| ');
});

// Menambahkan tanda plus (+) sebagai sudut kolom
const separator = "+" + Array(maxLength + 2).join("-") + "+" + Array(maxLength + 2).join("-") + "+" + Array(maxLength + 2).join("-") + "+" + Array(maxLength + 2).join("-") + "+";
console.log(separator);

// Hasil akhir
result.forEach((row) => {
  console.log(` |${row}| `);
  console.log(separator);
});

