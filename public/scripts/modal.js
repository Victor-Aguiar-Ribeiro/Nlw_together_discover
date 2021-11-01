export default function Modal(){

  const modalWrapper = document.querySelector('#modalWrapper')

  // Pegar botão de cancelar da Modal e chamar a função close -> onclick
  const cancelButton = document.querySelector('.buttons .cancel')
  cancelButton.addEventListener('click', close)

  function open() {
    // Atribui a classe 'active' à modalWrapper
    modalWrapper.classList.add('active')
  }

  function close() {
    // Remove a classe 'active' da modalWrapper
    modalWrapper.classList.remove('active')
  }

  return{ 
    open,
    close
  }
}