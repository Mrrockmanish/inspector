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

  $('#exampleModal').arcticmodal();

  //добавить новый список
  $('#add-new-list').arcticmodal();
  //выбрать список
  $('#choice-list').arcticmodal();
  //добавить найденное с поиске
  $('#search-add').arcticmodal();
  //добавление компании
  $('#add-object').arcticmodal();
  //удалить объект
  $('#deleteObject').arcticmodal();

  $('#graphModal').arcticmodal();

  $('#addNewListModal').arcticmodal();

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
    const infoDots = $('.information-dots');
    const infofields = $('.information-dots').find('.info-fields');

    if (!infofields.hasClass('show')) {
      infofields.fadeIn().addClass('show');
    } else infofields.fadeOut().removeClass('show');

    // скрываем поля при клике на область документа
    $(document).mouseup(function (e) {
      if (
          // если у полей есть класс show
          infofields.hasClass('show')
          // и клик был не по полю с названием объекта
          && !infoDots.is(e.target)
          // и его дочерним элементам
          && infoDots.has(e.target).length === 0 ) {
        // скрываем поля и удибраем класс show
        infoDots.find('.info-fields').fadeOut().removeClass('show');
      }
    });
  });

  // подмена заголовков фиксированной шапки при скролле
  const connectionsChangeHeaders = () => {
    const headerText = $('.header-connections-text');
    const deadConnections = $('.dead-connections');
    const headerTextDistance = headerText.offset().top;

    $('.connections').on('scroll', function () {
      if (deadConnections.offset().top < headerTextDistance && $('[data-filter="all"]').prop('checked')) {
        headerText.text('Недействующие связи');
      } else if (deadConnections.offset().top > headerTextDistance && $('[data-filter="all"]').prop('checked')) {
        headerText.text('Действующие связи');
      }
    });
  };
  connectionsChangeHeaders();

  // расчет длины и рисование стрелок между объектами связей
  // $('.connections-circle').each(function(index){
  //   const circle = $(this);
  //
  //   const additionDistance = 32;
  //   const circleLeftDistanceLeft = circle.offset().left;
  //   const circleLeftDistanceTop = circle.offset().top;
  //
  //   const prevSquare = circle.parent().prev().prev();
  //   const prevSquareLeftDistance = prevSquare.offset().left;
  //   const prevSquareTopDistance = prevSquare.offset().top;
  //
  //   const nextSquare = circle.parent().next().next();
  //   const nextSquareLeftDistance = nextSquare.offset().left;
  //   const nextSquareTopDistance =  nextSquare.offset().top;
  //
  //   const arrowLeftWidth = circleLeftDistanceLeft - prevSquareLeftDistance - prevSquare.outerWidth() + additionDistance;
  //   const arrowTopLeftHeight = circleLeftDistanceTop - prevSquareTopDistance;
  //
  //   const arrowRightWidth = nextSquareLeftDistance - circleLeftDistanceLeft - circle.outerWidth() + additionDistance;
  //   const arrowTopRightHeight = circleLeftDistanceTop - nextSquareTopDistance;
  //
  //   circle.find('.circle-arrow-left').css({'width': arrowLeftWidth});
  //   circle.find('.circle-arrow-left__vertical').css({'height': arrowTopLeftHeight});
  //
  //   circle.find('.circle-arrow-right').css({'width': arrowRightWidth});
  //   circle.find('.circle-arrow-right__vertical').css({'height': arrowTopRightHeight});
  // });

  const switchConnectionsFilters = () => {
    $('.lists-block__connections-filters').on('change', '[data-filter]', function () {

      const connections = $('.connections');
      const headerText = $('.header-connections-text'); // заголовок шапки
      const deadConnectionsRow = $('[data-row="dead-connections-row"]'); // заголовок неактивных связей
      const activeFilterText = $('.connections-active-filter__text'); // текст внутри фильра
      const activeFilterWrap = $('.connections-active-filter-wrap'); // обёртка фильров

      if ( $('[data-filter="actives"]').prop('checked') ) { // радиокнопка показа только действующих
        // меняем заголовок в фиксированной шапке
        headerText.text('Действующие связи');
        // меняем текст в применённых фильтрах
        activeFilterText.text('Только действующие');
        // убираем прозрачность у обёртки фильтров
        activeFilterWrap.removeClass('opacity-0');
        //скрываем неактивные связи
        connections.find('[data-row="notactives"]').hide();
        // показываем активные связи
        connections.find('[data-row="actives"]').fadeIn();
        // скрываем заголовок неактивных связей
        deadConnectionsRow.hide();


      } else if ( $('[data-filter="notactives"]').prop('checked') ) { // радиокнопка показа только не действующих
        // скрываем активные связи
        connections.find('[data-row="actives"]').hide();
        // скрываем заголовок неактивных связей
        deadConnectionsRow.hide();
        // меняем заголовок в фиксированной шапке
        headerText.text('Недействующие связи');
        // меняем текст в применённых фильтрах
        activeFilterText.text('Только недействующие');
        // убираем прозрачность у обёртки фильтров
        activeFilterWrap.removeClass('opacity-0');
        // скрываем неактивные связи
        connections.find('[data-row="notactives"]').fadeIn();
      }
      else {
        // меняем текст в применённых фильтрах
        activeFilterText.text('Все');
        // меняем заголовок в фиксированной шапке
        headerText.text('Действующие связи');
        connections.find('[data-row="actives"]').fadeIn();
        connections.find('[data-row="notactives"]').fadeIn();
        deadConnectionsRow.fadeIn();
        // добавляем прозрачность обёртке фильтров
        activeFilterWrap.addClass('opacity-0');
      }
      // нажатие на крестик в фильтре
      const connectionsShowClear = () => {
        $('.connections-active-filter__remove').on('click', function () {
          // меняем текст в применённых фильтрах
          activeFilterText.text('Все');
          // меняем заголовок в фиксированной шапке
          headerText.text('Действующие связи');
          connections.find('[data-row="actives"]').fadeIn();
          connections.find('[data-row="notactives"]').fadeIn();
          deadConnectionsRow.fadeIn();
          // добавляем прозрачность обёртке фильтров
          activeFilterWrap.addClass('opacity-0');
          // включаем радиокнопку
          $('[data-filter="all"]').prop('checked', true);
        });
      };
      connectionsShowClear();

    });
  };
  switchConnectionsFilters();



});