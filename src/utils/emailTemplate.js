export function feedbackEmailTemplate() {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Agradecemos pelo seu feedback</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #007bff;
          color: white;
          text-align: center;
          padding: 20px;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .content {
          padding: 20px;
          color: #333333;
        }
        .content h2 {
          font-size: 20px;
          color: #007bff;
        }
        .content p {
          line-height: 1.6;
          font-size: 16px;
        }
        .footer {
          background-color: #f4f4f9;
          text-align: center;
          padding: 10px;
          color: #666666;
          font-size: 14px;
        }
        .footer a {
          color: #007bff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Cabeçalho -->
        <div class="header">
          <h1>Obrigado pelo seu feedback!</h1>
        </div>
        
        <!-- Conteúdo -->
        <div class="content">
          <h2>Olá,</h2>
          <p>Gostaríamos de agradecer por dedicar seu tempo para nos enviar seu feedback. Sua opinião é extremamente valiosa para continuarmos melhorando nossos serviços.
          Retornaremos o mais rapido possivel !
          </p>
          <p>Se precisar de ajuda ou tiver mais sugestões, não hesite em entrar em contato conosco. Estamos sempre à disposição para ouvir você!</p>
          <p>Com gratidão,</p>
          <p><strong>Equipe InfoSolutions</strong></p>
        </div>
        
        <!-- Rodapé -->
        <div class="footer">
          <p>Este e-mail foi enviado por <strong>InfoSolutions</strong>.</p>
          <p>Para mais informações, visite nosso site: <a href="https://www.infosolutions.com.br">www.infosolutions.com.br</a></p>
        </div>
      </div>
    </body>
    </html>
  `;
}
