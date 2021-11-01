import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector('.modal .title')
const modalParagraph = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .modal-form .buttons .--btn-red')

// Pegar todos os botões com a classe 'check'
const checkButtons = document.querySelectorAll( '.actions a.check' )

// Adicionar um event listener em cada botão check
checkButtons.forEach( button => {
  button.addEventListener( 'click', handleClick)
})

// Pegar todos os botões com a classe 'trash'
const trashButtons = document.querySelectorAll( '.actions a.trash' )

// Adicionar um event listener em cada botão trash 
trashButtons.forEach( button => {
  button.addEventListener( 'click', (event) => { handleClick( event, false ) })
})

// Função que lida com o 'click' nos botões 'check' e 'trash'
function handleClick( event, check = true ) {
  const text = check ? `Marcar como lida` : `Excluir`

  modalTitle.innerHTML = `${text} a pergunta`
  modalParagraph.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = check ? 'Sim, tenho' : 'Sim, excluir'

  // Abrir modal
  modal.open( event );
}



