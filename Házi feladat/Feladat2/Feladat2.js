document.getElementById('felvetel_gomb')
    .addEventListener('click', () => {
        let nev = document.forms['pizzarendeles']['nev'].value;
        let telefonszam = document.forms['pizzarendeles']['telefonszam'].value;
        let hely = document.forms['pizzarendeles']['hely'].value;
        let pizzaalap = document.forms['pizzarendeles']['pizzaalap'].value;
        let pizza_feltet = document.forms['pizzarendeles']['pizzafeltet[]'];
        let megjegyzes = document.forms['pizzarendeles']['megjegyzes'].value;
        let pizza_feltet_kivalasztott = [];


        for (let index = 0; index < pizza_feltet.length; index++) {
            const element = pizza_feltet[index];
            if (element.type == 'checkbox' && element.checked == true) {
                pizza_feltet_kivalasztott.push(element.value);
            }
        }


        let minden_kitoltve = true;
        if (nev === '') {
            minden_kitoltve = false;
            alert('A teljes név kitöltése kötelező!')
        }
        if (telefonszam === '') {
            minden_kitoltve = false;
            alert('Az név kitöltése kötelező!')
        }
        if (hely === '') {
            minden_kitoltve = false;
            alert('A hely kiválasztása kötelező!')
        }

        if (pizzaalap.value === 1) {
            minden_kitoltve = false;
            alert('Adjon meg pizzaalapot!')
            }   else {
            minden_kitoltve = true;
            }

        if (pizza_feltet_kivalasztott.length == 0) {
            minden_kitoltve = false;
            alert('Válasszon ki legalább 1 feltétet!')
        }

        if (minden_kitoltve) {
            let megrendelo = {
                nev: nev,
                telefonszam: telefonszam,
                hely: hely,
                pizzaalap: pizzaalap,
                pizza_feltet: pizza_feltet_kivalasztott,
                megjegyzes: megjegyzes,
            };
            console.log(megrendelo);
        }
    });