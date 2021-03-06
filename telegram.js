function sendText() {
    var htpp = document.getElementById("htpp").value;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', htpp, true);
    xhr.onload = function (d) {
        if (this.status === 200) {
            // document.getElementById("resposta").innerHTML = this.responseText;
            var body = this.responseText;
            var jsonData = JSON.parse(body);
            var result = jsonData.result;
            var msg = "";
            if (result.length > 0) {
                for (i in result) {
                    var text = result[i].message.text;
                    var nome = result[i].message.from.first_name;
                    var hora = result[i].message.date;
                    var time = hora;
                    var d = new Date(time*1000 );
                    var n = d.toLocaleDateString();
                    

                    var msg = "<p>" + msg + (n + " : " + nome + " : " + text) + "</p>";
                    resposta.innerHTML = msg;
                }
            }
        }
    };
    xhr.send();
}

setInterval(sendText, 1000);
