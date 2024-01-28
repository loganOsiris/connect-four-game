import ViewController from './viewController';

function init() {
  new ViewController();
  console.log('app initialized');
}

document.addEventListener('DOMContentLoaded', init);
