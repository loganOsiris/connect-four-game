function openDialog(dialog: HTMLDialogElement) {
  if (dialog) {
    dialog.show();
  } else {
    console.error('Dialog not found');
  }
}

function closeDialog(dialog: HTMLDialogElement) {
  if (dialog) {
    dialog.close();
  } else {
    console.error('Dialog not found');
  }
}

function handleDialog(dialog: HTMLDialogElement, open = false) {
  if (!dialog) {
    console.warn('Dialog is: ', dialog);
    return;
  }

  if (open) {
    openDialog(dialog);
  } else {
    closeDialog(dialog);
  }
}

function init() {
  const dialog = document.querySelector('.dialog-rules') as HTMLDialogElement;

  document
    .querySelector('.btn-game-rules')!
    .addEventListener('click', () => handleDialog(dialog, true));
  dialog
    .querySelector('.btn-ok-dialog')!
    .addEventListener('click', () => handleDialog(dialog));
}

document.addEventListener('DOMContentLoaded', init);
