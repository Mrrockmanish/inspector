$(document).ready(function () {

  // таймлайн слайдер

  function sliderTimeline () {
    let slider = document.getElementById('range-slider');

    if (slider) {
      noUiSlider.create(slider, {
        start: [0, 500],
        connect: true,
        range: {
          'min': 0,
          'max': 500
        }
      });
    }
  }

  sliderTimeline();


  // открываем и закрываем левую синюю панель

  $('.left-panel').on('click', '.left-panel__open', function () {
    $(this).closest('.left-panel').addClass('open');
    // прячем иконку открытия
    $(this).hide();
    $(this).next('.left-panel__close').show();
    // прячем маленькое лого и показываем большое
    $('.top-panel__logo').hide();
    $('.top-panel__logo-full').show();
  });

  $('.left-panel').on('click', '.left-panel__close', function () {
    $(this).closest('.left-panel').removeClass('open');
    // прячем иконку закрытия
    $(this).hide();
    $(this).prev('.left-panel__open').show();
    // прячем большое лого и показываем маленькое
    $('.top-panel__logo-full').hide();
    $('.top-panel__logo').show();
  });

  // открываем панель списков справа

  $('.lists-block-tools').on('click', '.lists-block-tools__tool:not(.active)', function () {
    //убираем класс active у активной иконки
    $(this).closest('.lists-block-tools').find('.lists-block-tools__tool.active').removeClass('active');
    // добавляем класс active иконке
    $(this).addClass('active');

  });

  // прячем правую или показываем боковую панель
  $('.top-panel-exit').on('click', function () {
    $('.lists-block').toggleClass('hidden');
    $(this).toggleClass('close');
    $(this).find('svg').toggleClass('text-blue');
  });

  // пример модального окна

  //$('#exampleModal').arcticmodal();

  // добавить новый список
  //$('#add-new-list').arcticmodal();
  // выбрать список
  //$('#choice-list').arcticmodal();
  // добавить найденное с поиске
  //$('#search-add').arcticmodal();
  //добавление компании
  //$('#add-object').arcticmodal();
  //удалить объект
  //$('#deleteObject').arcticmodal();


  // подсказки

  $('.tooltip').tooltipster({
    animation: 'fade',
    delay: 100,
  });

  // раскрываем и закрываем фильры в списках

  $('.filter-drop').on('click', '.filter-drop__title', function(){
    $(this).next('.filter-drop__content').slideToggle();
    // поворачиваем иконку
    $(this).find('.filter-drop__dropdown').toggleClass('close');
  });

  //загрузка файла
  $('input[type="file"]').change(function(){
    let value = $(this).val().split('\\').pop();
    let uploadItem = $(this).closest('.upload-item');

    if (value) {
      uploadItem .find('.upload-item__file-icon').removeClass('text-b9').addClass('text-green');
      uploadItem .find('.upload-item__download-icon').hide();
      uploadItem .find('.upload-item__clear-icon').show();
    } else {
      uploadItem .find('.upload-item__file-icon').removeClass('text-green').addClass('text-b9');
      uploadItem .find('.upload-item__download-icon').show();
      uploadItem .find('.upload-item__clear-icon').hide();
    }

    if(value) {
      uploadItem .find('.upload-item__file-name').text(value);
    } else {
      uploadItem .find('.upload-item__file-name').text('Загрузить файл');
    }


  });



  //закрываем поля по клику на пункт

  $('.info-fields__item').on('click', function () {
    $(this).closest('.info-fields').fadeOut();
  });

  // раскрытие полей при клике на точки в информации об объекте

  $('.information-dots').on('click', function () {
    let infofields = $('.information-dots').next('.info-fields');

    if (!infofields.hasClass('show')) {
      infofields.fadeIn().addClass('show');
    } else infofields.fadeOut().removeClass('show');

  });


  // скрываем поля при клике на область документа
  $(document).mouseup(function (e) {
    let infoDots = $('.information-dots');
    let infofields = $('.information-dots').next('.info-fields');
    let objectInfoName = $('.object-info__name');

    if (
        // если у полей есть класс show
        infofields.hasClass('show')
        // и клик был не по полю с названием объекта
        && !objectInfoName.is(e.target)
        // и его дочерним элементам
        && objectInfoName.has(e.target).length === 0 ) {
      // скрываем поля и удибраем класс show
      infoDots.next('.info-fields').fadeOut().removeClass('show');
    }
  });

  const preloader = (timeout, currentPercent, end) => {
    const addPercent = () => {
      $('.preloader__percent').text(`${currentPercent}%`);
    };
    setInterval(() => { if(currentPercent <= end) { addPercent(); currentPercent++; } }, timeout);
  };
  preloader(300, 1, 99);


});