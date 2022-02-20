document.getElementById('regisztracios_gomb')
    .addEventListener('click', () => {
        let felh_nev = document.forms['regisztracios_form']['felh_nev'].value;
        let jelszo1 = document.forms['regisztracios_form']['jelszo1'].value;
        let jelszo2 = document.forms['regisztracios_form']['jelszo2'].value;
        let email = document.forms['regisztracios_form']['email'].value;
        let szuletesi = document.forms['regisztracios_form']['szuletesi'].value;
        /*
        let honnan_hallott = document.forms['regisztracios_form']['honnan_hallott[]'];
        let honnan_hallott_kivalsztott = [];
        for (let index = 0; index < honnan_hallott.length; index++) {
            const element = honnan_hallott[index];
            if (element.type == 'checkbox' && element.checked == true) {
                honnan_hallott_kivalsztott.push(element.value);
            }
        }*/
        let minden_kitoltve = true;
        if (email === '') {
            minden_kitoltve = false;
            alert('Az email kitöltése kötelező!')
        }
        if (szuletesi === '') {
            minden_kitoltve = false;
            alert('A születési dátum kitöltése kötelező!')
        }
        if (felh_nev === '') {
            minden_kitoltve = false;
            alert('A felhasználónév kitöltése kötelező!')
        }
        if (felh_nev.length < 6 || felh_nev.length > 15) {
            alert('Nem megfelelő felhasználónév!')
            return
        }
        if (jelszo1 === '') {
            minden_kitoltve = false;
            alert('A jelszó kitöltése kötelező!')
        }
        if (jelszo2 === '') {
            minden_kitoltve = false;
            alert('A jelszó kitöltése kötelező!')
        }
        if (jelszo1!=jelszo2) {
            alert('A két jelszó nem egyezik!')
            return
        }
        if (jelszo1.length < 6 || jelszo2.length < 6) {
            alert('Nem megfelelő jelszó! Adjon meg hosszabbat!')
        }
        if (minden_kitoltve) {
            let felhasznalo = {
                email: email,
                szuletesi: szuletesi,
                felh_nev: felh_nev,
                jelszo2: jelszo2,
            };
            console.log(felhasznalo);
        }
    });