var hi ="salom hammaga!"
console.log(hi);

function salomBer(ism,yosh=18){
    console.log(hi + ". Mani ismim "  + ism +".Yoshim:" + yosh);
}

function yoshniQaytar(age) {
    if(age < 7) {
        return "siz maktab yoshiga yetmagansiz"
    } else {
        return "Siz maktabga kirgansiz"
    }
}

var mytext = yoshniQaytar(12)
console.log(mytext);