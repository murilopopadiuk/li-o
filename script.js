function enviar(){
    const nome = document.getElementById('nome').value
    const assunto = document.getElementById('assunto').value
    const mensagem = `Gostaria de entrar em contato!\n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    console.log(msg)
    window.open(`https://wa.me/5541999999999?text=${msg}`)

}

