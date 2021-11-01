import Modal from "./modal.js"

const modal = Modal()

const modalTitle = document.querySelector('.modal .title')
const modalParagraph = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal .modal-form .buttons .--btn-red')

// Pegar todos os botões com a classe 'check'
const checkButtons = document.querySelectorAll( '.actions a.check' )

// Adicionar um event listener em cada botão check
checkButtons.forEach( button => {
  button.addEventListener( 'click', event => { 
    modalTitle.innerHTML = 'Marcar como lida'
    modalParagraph.innerHTML = 'Tem certeza que você deseja marcar esta pergunta como lida?'
    modalButton.innerHTML = 'Sim, tenho'

    // Abrir modal
    modal.open( event );
  })
})

// Pegar todos os botões com a classe 'trash'
const trashButtons = document.querySelectorAll( '.actions a.trash' )

// Adicionar um event listener em cada botão trash 
trashButtons.forEach( button => {
  button.addEventListener( 'click', event => { 
    modalTitle.innerHTML = 'Excluir pergunta'
    modalParagraph.innerHTML = 'Tem certeza que você deseja excluir esta pergunta?'
    modalButton.innerHTML = 'Sim, excluir'

    // Abrir modal
    modal.open( event );
  })
})



