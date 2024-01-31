$('#enviarForm').click(function(event) {

    event.preventDefault();

    let formData = {
      nome: $("#nome").val(),
      email: $("#email").val(),
      assunto: $("#assunto").val(),
      mensagem: $("#mensagem").val(),
      telefone: $("#telefone").val()
  };

    $.ajax({ 
      type: 'POST',
      url: 'https://1d8c8f3e-d53f-4f69-9c23-efdaa63cdc8f-00-1wzkw6ml5tt64.spock.replit.dev/envioEmail',
      data: JSON.stringify(formData), // Converter o objeto de dados em JSON
      contentType: 'application/json', // Configurar o tipo de conteúdo
      success: function(response) {
        window.alert("Email enviado!")
      },
      error: function(error) {
        // A função é chamada se ocorrer um erro na requisição
        window.alert("Email não pode ser enviado!")
      }
    });
  });
a