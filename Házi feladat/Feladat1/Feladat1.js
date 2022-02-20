

document.getElementById('valtas_gomb')

    .addEventListener('click', () => {

    if  (document.getElementById('betu01').value === "")
        {
        alert("Nem írt be semmit!") 
        }
        
    else if  (document.getElementById('betu02').checked === true)
        {
        document.getElementById('kiiras').innerHTML = document.getElementById('betu01').value.toLowerCase();
        }

    else if (document.getElementById('betu03').checked === true)
        {
        document.getElementById('kiiras').innerHTML = document.getElementById('betu01').value.toUpperCase();
        } else{
            alert("Nem választott ki gombot!")
        }
    });

    