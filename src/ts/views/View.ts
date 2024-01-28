export default abstract class View {
  protected _parentElement: Element = document.getElementById('app')!;
  abstract _generateMarkup(): string;
  _data: any;
  //TODO: Typer correctement

  constructor() {
    this._data = {};
  }
  //TODO: Typer correctement

  render({ render = true, data = {} } = {}): string | void {
    if (data || (Array.isArray(data) && data.length !== 0)) {
      this._data = data;
    } else {
      console.error('the data is not good', data);
    }

    const markup = this._generateMarkup();

    if (!render) {
      return markup;
    }

    this._clear();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data: any) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    console.log(newDOM);
    console.log(this._parentElement);

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue?.trim() !== ''
      ) {
        console.log('💥', newEl.firstChild?.nodeValue?.trim());
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach((attr) => {
          return curEl.setAttribute(attr.name, attr.value);
        });
    });
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
