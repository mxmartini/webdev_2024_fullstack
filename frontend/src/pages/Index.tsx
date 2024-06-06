import Header from "../components/Header"

import "../assets/index/index.css"

function Index() {

  return (
    <>
      <Header />
      
      <h1> Bem-vindo à nossa loja virtual </h1>
      <div className="product-container">
          <div className="product-block">
              <h3>QR</h3>
              <h4>50 tickets</h4>
              <p>
                  Serviço que protege sua festa contra festas que entregam QR Codes individuais para identificação de entrada. Certamente um item obrigatório!
              </p>
              <button>+ Adicionar</button>
          </div>
          <div className="product-block">
              <h3>RSVP</h3>
              <h4>50 tickets</h4>
              <p>
                  Serviço de contato com seus convidados através de ligações telefônicas ou do seu aplicativo de mensagens favorito, incluindo mensagens de mídia como foto ou vídeo.
              </p>
              <button>+ Adicionar</button>
          </div>
          <div className="product-block">
              <h3>STD</h3>
              <h4>50 tickets</h4>
              <p>
                  Serviço de envio de mensagens Save the Dates através do seu aplicativo de mensagens favorito, incluindo mensagens de mídia como foto ou vídeo.
              </p>
              <button>+ Adicionar</button>
          </div>
      </div>
    </>
  )
}

export default Index