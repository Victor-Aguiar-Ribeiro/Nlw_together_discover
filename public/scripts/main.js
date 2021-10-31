import { Modal } from "./modal"

const modal = Modal()

// Pegar todos os botões com a classe 'check'
const checkButtons = document.querySelectorAll( '.actions .check' )

// Adicionar um event listener em cada botão check para
checkButtons.forEach( ( button ) => {
  button.addEventListener( 'click', event => { 
    // Abrir modal
    modal.open( event )
  })
})



