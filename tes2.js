function hitungKastil(array) {
    let jmlhKastil = 1;

    for (let i = 1; i < array.length; i++) {
      let inc = false;
      let dec = false;
      
      // operator while akan mengecek apakah nilai saat ini lebih besar dari elemen sebelum nya, jika iya maka nilai inc menjadi true dan ditambah 1
      while (i < array.length && array[i] > array[i - 1]) {
        inc = true;
        i++;
      }
      
      if (inc) {
        jmlhKastil++;
      }
         // operator while akan mengecek apakah nilai saat ini lebih kecil dari elemen sebelum nya, jika iya maka nilai dec menjadi true dan ditambah 1
      while (i < array.length && array[i] < array[i - 1]) {
        dec = true;
        i++;
      }
      
      if (dec) {
        jmlhKastil++;
      }
    };
    return jmlhKastil;
  }
  //syarat untuk menjadi lembah/bukit adalah ketika naik dan turun harus bernilai true, jika false maka tidak akan menjadi lembah/bukit
  const X = [3, -1, -5, -5, 2, 4, 7, 5, 1, 1, 1, 4];
  const hasil = hitungKastil(X);
  console.log(hasil);

  
