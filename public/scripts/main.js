import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector('.modal .title')
const modalParagraph = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .modal-form .buttons .submit')

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
  // Prevenir que os botões passem um href para a URL por padrão
  event.preventDefault();

  const text = check ? `Marcar como lida` : `Excluir`
  const roomId = document.querySelector( '#roomId').dataset.id
  const questionId = event.target.dataset.id
  const action = check ? 'check' : 'trash'

  const modalForm = document.querySelector( '.modal .modal-form' )

  modalForm.setAttribute( 'action', `/q_and_a/${ roomId }/${ questionId }/${ action }`)

  modalTitle.innerHTML = `${text} a pergunta`
  modalParagraph.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

  // Mudar as cores dos botões quando são 'check' -> blue ou 'trash' -> red
  check ? ( modalButton.classList.remove('--btn-red'), modalButton.classList.add('--btn-blue') ) : ( modalButton.classList.remove('--btn-blue'), modalButton.classList.add('--btn-red') )
  
  // Abrir modal
  modal.open( event );
}



