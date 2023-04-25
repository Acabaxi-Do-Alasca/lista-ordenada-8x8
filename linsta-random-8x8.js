var lista = []
        while (lista.length < 64){
            var numero = Math.floor(Math.random() * 64)
            var pode = true
            for(var x = 0; x < lista.length; x++){
                if (numero == lista[x]){
                    pode = false}}
            if (pode == true){
                lista.push(numero)}}
                lista.sort(function(a, b) {
                    return a - b;
                    });
        console.log(lista)
        var matrix =[]
        for (var y = 0; y < 8; y++){
            var linha = []
            for (var x = 0 + y * 8; x < 8 + y * 8; x++){
                linha.push(lista[x])
            }
            matrix.push(linha)
        }
        console.log(matrix)