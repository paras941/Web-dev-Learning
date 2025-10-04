// async 

async function saymyname(){
    setInterval(function(){
        console.log('I am a await')
    },3000)
}

saymyname();


// fetch API

async function getdata(){
    let response = await fetch( "https://example.org/products.json");
    let data = response.json();
    console.log(data)
}

getdata();