export default class Popover {
  constructor(target) {
    this.target = target;
    this.popover = null;
    this.body = document.querySelector('body');
    this.timer = null;
    this.init();
  }

  init() {
    this.target.addEventListener('click', this.show.bind(this));
  }

  show(e) {
    e.preventDefault();
    const attr = Object.assign({}, this.target.dataset);
    if (this.popover && attr.trigger === 'hover') {
      clearTimeout(this.timer);
      this.timer = null;
      this.createCloseTimer();
      return;
    }

    if (this.popover && attr.trigger === 'focus') {
      return;
    }

    if (this.popover && (!attr.trigger || attr.trigger === 'click')) {
      this.hide();
      return;
    }

    this.createPopover();
    this.bindToDom();
    // eslint-disable-next-line no-prototype-builtins
    attr.hasOwnProperty('placement')
      ? this.addStylePopover(attr.placement)
      : this.addStylePopover('top');

    if (attr.trigger === 'hover') {
      this.createCloseTimer();
    }
    if (attr.trigger === 'focus') {
      document.addEventListener('click', this.clickCloseToFocus.bind(this));
      return;
    }
  }

  hide() {
    if (this.popover) {
      this.popover.remove();
      this.popover = null;
    }
  }

  setOptions(options) {
    for (const key in options) {
      if (key === 'title') {
        this.target.title = options[key];
      } else {
        this.target.dataset[key] = options[key];
      }
    }
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.className = 'tooltip';
    let textHtml = '';
    if (this.target.title) {
      textHtml = `<div class="tooltip-header">${this.target.title}</div>
      <div class="tooltip-body">${this.target.dataset.content}</div>`;
    } else {
      textHtml = `<div class="tooltip-body">${this.target.dataset.content}</div>`;
    }
    this.popover.insertAdjacentHTML('beforeend', textHtml);
  }

  bindToDom() {
    this.body.append(this.popover);
  }

  createCloseTimer() {
    this.timer = setTimeout(() => {
      this.popover.remove();
      this.popover = null;
      clearTimeout(this.timer);
      this.timer = null;
    }, 3000);
  }

  clickCloseToFocus(e) {
    if (e.target !== this.target) {
      document.removeEventListener('click', this.clickCloseToFocus);
      this.hide();
    }
  }

  addStylePopover(position) {
    const offset = 10;
    let { width, height, left } = this.target.getBoundingClientRect();
    width = Math.floor(width);
    left = Math.floor(left);
    height = Math.floor(height);

    const widthEl = width + offset < 250 ? 250 : width + offset;
    this.popover.style.width = widthEl + 'px';
    switch (position) {
      case 'top':
        this.popover.style.top =
          this.target.offsetTop - offset - this.popover.offsetHeight + 'px';
        this.popover.style.left = left + (width - widthEl) / 2 + 'px';
        this.popover.classList.add('arrow-bottom');
        break;
      case 'left':
        this.popover.style.top =
          this.target.offsetTop +
          (height - this.popover.offsetHeight) / 2 +
          'px';
        this.popover.style.left = left - widthEl - offset + 'px';
        this.popover.classList.add('arrow-right');
        break;
      case 'right':
        this.popover.style.top =
          this.target.offsetTop +
          (height - this.popover.offsetHeight) / 2 +
          'px';
        this.popover.style.left = left + width + offset + 'px';
        this.popover.classList.add('arrow-left');
        break;
      case 'bottom':
        this.popover.style.top = this.target.offsetTop + height + offset + 'px';
        this.popover.style.left = left + (width - widthEl) / 2 + 'px';
        this.popover.classList.add('arrow-top');
        break;
      default:
        break;
    }
  }
}
