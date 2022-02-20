document.getElementById('bor_gomb')
    .addEventListener('click', () => {
        let email = document.forms['bor']['email'].value;
        let nev = document.forms['bor']['nev'].value;
        let szin = document.forms['bor']['szin'].value;
        let alkohol = document.forms['bor']['alkohol'].value;
        let fajta = document.forms['bor']['fajta'].value;
        let cukor = document.forms['bor']['cukor[]'];
        let cukor_kivalasztott = [];

        for (let index = 0; index < cukor.length; index++) {
            const element = cukor[index];
            if (element.type == 'checkbox' && element.checked == true) {
                cukor_kivalasztott.push(element.value);
            }
        }

        let minden_kitoltve = true;
        if (email === '') {
            minden_kitoltve = false;
            alert('Az email kitöltése kötelező!')
        }
        if (nev === '') {
            minden_kitoltve = false;
            alert('A név kitöltése kötelező!')
        }
        if (szin === '') {
            minden_kitoltve = false;
            alert('A szin kiválasztása kötelező!')
        }
        if (cukor_kivalasztott.length == 0) {
            minden_kitoltve = false;
            alert('Válasszon ki legalább 1 cukortartalmat!')
        }
        if (alkohol === '') {
            minden_kitoltve = false;
            alert('Az alkohol kiválasztása kötelező!')
        }
        if (fajta === '') {
            minden_kitoltve = false;
            alert('A fajta kiválasztása kötelező!')
        }

        if (minden_kitoltve) {
            let Bor_valasztas = {
                email: email,
                nev: nev,
                szin: szin,
                alkohol: alkohol,
                fajta: fajta,
                cukor: cukor_kivalasztott,
            };
            console.log(Bor_valasztas);
        }
    });