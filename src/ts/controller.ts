function openDialog() {
  const dialog = document.querySelector('.dialog-rules') as HTMLDialogElement;
  if (dialog) {
    dialog.showModal();
  } else {
    console.error('Dialog not found');
  }
}

// Fonction pour fermer le dialog
function closeDialog() {
  const dialog = document.getElementById('dialog-rules') as HTMLDialogElement;
  if (dialog) {
    dialog.close();
  } else {
    console.error('Dialog not found');
  }
}

function init() {
  openDialog()
}

document.addEventListener("DOMContentLoaded", init)