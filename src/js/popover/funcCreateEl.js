import clickSvg from '../../img/click_icon_151451.svg';
export default function createElement() {
  const conteiner = document.querySelector('.popovers');

  const containerStates = document.createElement('div');
  containerStates.className = 'container cntr-states';

  containerStates.insertAdjacentHTML(
    'beforeend',
    `<h3>Триггеры для поповера</h3>
    <button type="button" class="btn bth-states" 
    data-toggle="popover"
    title="Заголовок"
    data-content="Здесь располагается текст сообщения поповера. Классический поповер.">
    Старндартный поповер</button>
    <a tabindex="0" class="btn bth-states" 
    role="button" data-toggle="popover" 
    title="Заголовок" 
    data-content="Здесь располагается текст сообщения поповера. Этот поповер закрывается при клике в любое место, кроме кнопки.">
    Закрытие по клику вне кнопки</a>
    <span class="wrapper-btn" data-toggle="popover" data-content="Закрытие попвера по таймеру">
      <button class="btn-disabled" style="pointer-events: none;" type="button" disabled>Не активная кнопка</button>
    </span>
    `
  );
  conteiner.append(containerStates);

  const containerSides = document.createElement('div');
  containerSides.className = 'container cntr-sides';
  containerSides.insertAdjacentHTML(
    'beforeend',
    `<h3>Расположение поповера</h3>
    <button type="button" class="btn bth-sides" 
    data-toggle="popover"
    data-content="Здесь располагается текст сообщения поповера. Отображение вверху.">
    Поповер сверху</button>
    <button type="button" class="btn bth-sides" 
    data-toggle="popover"
    data-content="Здесь располагается текст сообщения поповера. Отображение справа.">
    Поповер справа</button>
    <button type="button" class="btn bth-sides" 
    data-toggle="popover"
    data-content="Здесь располагается текст сообщения поповера. Отображение снизу.">
    Поповер снизу</button>
    <button type="button" class="btn bth-sides" 
    data-toggle="popover"
    data-content="Здесь располагается текст сообщения поповера. Отображение влева.">
    Поповер слева</button>
    `
  );
  conteiner.append(containerSides);

  const containerType = document.createElement('div');
  containerType.className = 'container cntr-type';
  containerType.insertAdjacentHTML(
    'beforeend',
    `<h3>Различные типы тэгов</h3>
    <a href="" class="bth-type-link" 
    data-toggle="popover"
    data-content="Здесь располагается текст сообщения поповера. Поповер на элементе <a>">
    Ссылка A</a>
    <div class="bth-type-div" 
    data-toggle="popover"
    data-content="Здесь располагается текст сообщения поповера. Поповер на элементе <div>">
    Блок DIV</div>
    <span class="wrapper-i" data-toggle="popover" 
    data-content="Здесь располагается текст сообщения поповера. Поповер на элементе иконочного шрифта">
     <i class="fa-regular fa-square-info"></i>
    </span>
    <span class="wrapper-img" data-toggle="popover" 
    data-content="Здесь располагается текст сообщения поповера. Поповер для картинки">
    <img src="${clickSvg}" class="btn-img"/>
    </span>
    `
  );
  conteiner.append(containerType);
}
