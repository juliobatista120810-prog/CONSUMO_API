async function consumir_api(){
    let currency = "USD-BRL";
    let api_url = `https://economia.awesomeapi.com.br/json/last/${currency}`;

    let resposta = await fetch(
        api_url
    );

    let json_resposta = await resposta.json()
     console.log(json_resposta);
}