const students = [
  { 
    id: 1, 
    name: "Aleyna", 
    lastname: "Akdaş", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 2, 
    name: "Barış", 
    lastname: "Ersöz", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 3, 
    name: "Buğra", 
    lastname: "Erdoğan", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 4, 
    name: "Damla Nur", 
    lastname: "Büyükütnü", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 5, 
    name: "Erkan", 
    lastname: "Göçer", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 6, 
    name: "Gamzenur", 
    lastname: "Sasa", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 7, 
    name: "Hasan", 
    lastname: "Dertli", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 8, 
    name: "Hilal", 
    lastname: "Kızılcık", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 9, 
    name: "Hilal", 
    lastname: "Özdil", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 10, 
    name: "Irmak", 
    lastname: "Özen", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 11, 
    name: "Koray", 
    lastname: "Keleş", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 12, 
    name: "Melek", 
    lastname: "Dal", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 13, 
    name: "Mehmet", 
    lastname: "Sönmez", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 14, 
    name: "Merve", 
    lastname: "Kabakcı", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 15, 
    name: "Misirkhan", 
    lastname: "Kazimli", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 16, 
    name: "Nebi Koray", 
    lastname: "Kaya", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 17, 
    name: "Nisanur", 
    lastname: "Koç", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 18, 
    name: "Osmancan", 
    lastname: "Altınkaynak", 
    gender: "Erkek", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 19, 
    name: "Pınar", 
    lastname: "Düğeroğlu", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 20, 
    name: "Sena", 
    lastname: "Kalkan", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 21, 
    name: "Tuğba", 
    lastname: "Polat", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
  { 
    id: 22, 
    name: "Ummahan", 
    lastname: "Güneş", 
    gender: "Kadın", 
    section: "Frontend", 
    role: "Öğrenci" 
  },
];

function erkekListele(){
    for (const student of students) {
        if(student.gender === "Erkek"){
            erkekListesi.innerHTML += `<li> ${student.name} ${student.lastname} </li>`;
        }
    }
}

function erkekSayisiYazdir(){
    erkekSayi.innerText = 'Erkek Öğrenci Sayısı: 9';   
}

function kadinSayisiYazdir(){
    kadinSayi.innerText = 'Kadın Öğrenci Sayısı: 13';   
}

function kadınListele(){
    for (const student of students) {
        if(student.gender === "Kadın"){
            kadınListesi.innerHTML += `<li> ${student.name} ${student.lastname} </li>`;
        }
    }
}


erkekListele();
kadınListele();
erkekSayisiYazdir();
kadinSayisiYazdir();