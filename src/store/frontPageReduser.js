import { RiCarWashingLine } from 'react-icons/ri';
import { RxCountdownTimer } from 'react-icons/rx';
import { TbCalendar, TbDisabled } from 'react-icons/tb';
import geneticCard from '../img/Cards/card-genetic.jpg';
import heartInfoCard from '../img/Cards/card-heartinfo.jpg';
import diabetCard from '../img/Cards/diabet-card.jpg';
import conferentoinsForDoctors from '../img/Cards/card-conferentions.jpg';
import partnerProgramsCard from '../img/Cards/card-partners-programs.jpg';
import saveMoneyCard from '../img/Cards/card-savemoney.jpg';
import organisationCard from '../img/Cards/card-organisations.jpg';
import franshizaCard from '../img/Cards/card-franshiza.jpg';
import becomeAPartnerCard from '../img/Cards/card-become-partner.jpg';
import heartTest from '../img/tests/heart-test.png';
import covidTest from '../img/tests/covid-test.png';
import bagTest from '../img/tests/bag-test.png';
import map from '../img/tests/map.jpg';
import stepOne from '../img/quality-steps/quality-1.svg';
import stepTwo from '../img/quality-steps/quality-2.svg';
import stepThree from '../img/quality-steps/quality-3.svg';
import alpha from '../img/partners/alpha-dms.jpg';
import alians from '../img/partners/alians-dms.jpg';
import reso from '../img/partners/reso-dms.jpg';
import vsc from '../img/partners/vsc-dms.jpg';
import sogaz from '../img/partners/sogaz-dms.jpg';
import soglasie from '../img/partners/soglasie-dms.jpg';
import license from '../img/lisenses/license.png';
import acreditation from '../img/lisenses/acreditate.png';
import probirka from '../img/order/probirkaandchecklist.png';
import document from '../img/order/document.png';
import calendar from '../img/order/calendar.png';
import computer from '../img/order/computer.png';
import fanendoscop from '../img/order/fanendoskop.png';

const initialState = {
  insuranceCompanys: [
    { src: soglasie, alt: 'согласие' },
    { src: sogaz, alt: 'согаз' },
    { src: vsc, alt: 'vsc' },
    { src: alians, alt: 'альянс' },
    { src: alpha, alt: 'альфа' },
    { src: reso, alt: 'ресо' },
  ],
  jobBonuses: [
    'Возможность работать в команде профессионалов одного из наиболее амбициозных проектов в современной российской медицине',
    'Реализация и развитие профессионального опыта и компетенций в работе над интересными социально значимыми задачами',
    'Использование современных инструментов и технологий, включая новейшее оборудование, IT-разработки и цифровые сервисы',
    'Непрерывное обучение и повышение квалификации на очных и дистанционных тренингах, курсах и тестах',
    'Участие в корпоративных событиях и мероприятиях, которые позволяют проявить свой личностный потенциал и индивидуальность',
  ],
  contacts: [
    {
      id: 1,
      title: 'Клиентам',
      contactFor: [
        '- любые вопросы по качеству обслуживания клиентов в Центрах VICTORIA и Контакт-центре',
        '- комментарии и предложения по улучшению работы VICTORIA',
      ],
      phone: '8-800-05-05-05',
      email: 'feedback@victoria-lab.ru',
    },
    {
      id: 2,
      title: 'Корпоративным клиентам',
      contactFor: [
        '- заключение договоров на выполнение лабораторных исследований',
        '- запрос коммерческого предложения',
        '- иные вопросы по сотрудничеству с частными или государственными медицинскими учреждениями',
      ],
      phone: '8-800-05-05-05',
      email: 'lab@victoria-lab.ru',
    },

    {
      id: 3,
      title: 'Франчайзинг',
      contactFor: [
        '- запрос условий по франчайзингу',
        '- открытие процедурного кабинета VICTORIA на базе действующего медицинского центра',
      ],
      phone: '8-800-05-05-05',
      email: 'fr@victoria-lab.ru',
    },

    {
      id: 4,
      title: 'Пресс-центр',
      contactFor: [
        '- запросы СМИ на интервью, комментарии, статьи',
        '- предложения по совместным PR-проектам',
        '- подписаться на пресс-релизы VICTORIA',
      ],
      phone: '8-800-05-05-05',
      email: 'pr@victoria-lab.ru',
    },

    {
      id: 5,
      title: 'Партнеры и поставщики',
      contactFor: [
        '- коммерческие предложения, предложения по рекламе и размещению',
        '- предложения по совместным проектам',
        '- аренда',
      ],
      phone: '8-800-05-05-05',
      email: 'reklama@victoria-lab.ru',
    },
  ],
  qualityControlSteps: [
    {
      id: 1,
      title: 'Шаг первый',
      src: stepOne,
      alt: 'Шаг первый',
      description:
        'подготовка пациента, назначение исследования, регистрация и взятие биоматериала, транспортировка в лабораторию, сортировка образцов.',
    },
    {
      id: 2,
      title: 'Шаг второй',
      src: stepTwo,
      alt: 'выезд на дом',
      description:
        'непосредственное проведение лабораторного исследования, включая проведение мероприятий по контролю качества.',
    },
    {
      id: 3,
      title: 'Шаг третий',
      src: stepThree,
      alt: 'Шаг третий',
      description:
        'валидация полученного результата исследования врачом лаборатории, лабораторное заключение, выдача результата пациенту или лечащему врачу и решение на основе результатов исследования',
    },
  ],
  frontPageLinks: [
    {
      id: 1,
      title: 'Сдать анализы',
      src: heartTest,
      alt: 'сердце',
      link: 'servises/analysis/popularAnalysis',
    },
    {
      id: 2,
      title: 'Выезд на дом',
      src: bagTest,
      alt: 'выезд на дом',
      link: 'about/home-servis',
    },
    {
      id: 3,
      title: 'Тесты на COVID-19',
      src: covidTest,
      alt: 'коронавирус',
      link: 'servises/analysis/covidTests',
    },
    {
      id: 4,
      title: 'Адреса и время работы ',
      src: map,
      alt: 'карта',
      link: 'about/adresses',
    },
  ],
  cardsForPations: [
    {
      id: 1,
      title:
        'Наследственная предрасположенность к развитию сахарного диабета I и II типа',
      price: '1390 руб',
      src: diabetCard,
      alt: 'Выявление диабета на ранних стадиях',
      link: 'servises/analysis/analys/5',
    },
    {
      id: 2,
      src: geneticCard,
      title: 'Генетические причины бесплодия',
      price: '9 340 ₽',
      alt: 'Исследуй свою генетику',
      link: 'servises/analysis/analys/1',
    },
    {
      id: 3,
      title: 'Расширенное обследование сердца и сосудов',
      price: '1 100 ₽',
      src: heartInfoCard,
      alt: 'Познай своё сердце',
      link: 'servises/analysis/analys/35',
    },
  ],
  cardsForDoctors: [
    {
      id: 1,
      src: conferentoinsForDoctors,
      alt: 'Информация для врачей',
    },
    {
      id: 2,
      src: partnerProgramsCard,
      alt: 'Информация для врачей',
    },
    {
      id: 3,
      src: saveMoneyCard,
      alt: 'Информация для врачей',
    },
  ],
  cardsForOrganisations: [
    {
      id: 1,
      src: organisationCard,
      alt: 'Информация для организаций',
    },
    {
      id: 2,
      src: franshizaCard,
      alt: 'Информация для организаций',
    },
    {
      id: 3,
      src: becomeAPartnerCard,
      alt: 'Информация для организаций',
    },
  ],
  stepsForOrder: [
    {
      number: 1,
      src: probirka,
      alt: 'пробрка',
      text: 'Выберите необходимые анализы',
    },
    {
      number: 2,
      src: calendar,
      alt: 'календарь',
      text: 'Оформите заказ и укажите удобное время',
    },
    {
      number: 3,
      src: document,
      alt: 'расписание',
      text: 'В назначенное время к вам на дом приедет медратниик и возьмет анализы',
    },
    {
      number: 4,
      src: computer,
      alt: 'компьютер',
      text: 'Получите результат в личном кабинете',
    },
  ],
  homeServiseMoreOptions: [
    {
      icon: <RiCarWashingLine />,
      title: 'Срочный выезд на дом',
      description:
        'В течение 6 часов с момента подтверждения заявки медицинские сотрудники VICTORIA приедут к вам домой или в офис для оказания услуги',
    },
    {
      icon: <TbDisabled />,
      title: 'Бесплатный выезд для инвалидов первой группы и ветеранов ВОВ',
      description:
        'Обязательным условием для бесплатного вызова является наличие справки, подтверждающей факт инвалидности или удостоверение ветерана ВОВ. Выезд будет осуществлен в течение 5 рабочих дней с момента оформления заявки.',
    },
    {
      icon: <TbCalendar />,
      title: 'Результаты в день обращения',
      description:
        'Вы сможете получить результаты медицинских анализов в будние дни до 14.00 и в субботу до 17.00',
    },
    {
      icon: <RxCountdownTimer />,
      title: 'ПЦР-тест на COVID-19',
      description:
        'При сдаче на дому ПЦР-теста на Covid-19 в режиме Приоритет до 20.00 результат будет готов на следующий день до 08.00 (в выходные - до 15.00).',
    },
  ],
  dmsCards: [
    {
      number: 1,
      src: fanendoscop,
      alt: 'фанендоскоп',
      text: 'Обратитесь в свою страховую компанию',
    },
    {
      number: 2,
      src: calendar,
      alt: 'календарь',
      text: 'Согласуйте со страховой компанией список анализов, а также формат визита: в Центры Victoria или вызов Мобильной службы на дом',
    },
    {
      number: 3,
      src: document,
      alt: 'документ',
      text: 'Ваш заказ будет оплачен страховой компанией',
    },
  ],
  licenses: [
    {
      title: ' Лицензия',
      description:
        'Деятельность Компании ООО «НПФ «VICTORIA» с 2013 года осуществляется на основе лицензии, выданной уполномоченным органом исполнительной  власти субъекта Российской Федерации.',
      hasItemDescription: true,
      itemDescription: {
        src: license,
        alt: 'Лицензия',
        description:
          'Лицензия на осуществление медицинской деятельности № Л041-01126-23/00553381 от 10.11.2020.',
      },
    },
    {
      title:
        'Сертификат стандартов качества лабораторной диагностики CAP (The College of American Pathologists)',
      description:
        "В 2021 году 'VICTORIA' получилa международный сертификат стандартов качества лабораторной диагностики Коллегии американских патологов (Certificate of The College of American Pathologists) и был включен в список лучших лабораторий мира.",
      hasItemDescription: true,
      itemDescription: {
        src: acreditation,
        alt: 'Акредитация',
        description:
          'Сертификат CAP выдается при условии, что деятельность Компании полностью отвечает более чем 3000 требований, сформулированным при участии 500 экспертов в области лабораторной диагностики.',
      },
    },
    {
      title:
        'Sigma-metric Performance от американской компании Westgard QC, Inc.',
      description:
        'В 2019 году Лабораторная служба "VICTORIA" прошла сертификацию по международному стандарту Sigma-metric Performance от американской компании Westgard QC, Inc . Верификация проводится по программе «Шесть сигм» (англ. six sigma). Такая верификация означает, что погрешности при выполнении исследований статистически возможны всего лишь в 3,4 случая из одного миллиона.',
      hasItemDescription: false,
    },
    {
      title: 'Статус референс-лаборатории Roche Diagnostics',
      description:
        'В 2018 году Компания получила статус референс-лаборатории Roche Diagnostics . Что означает соответствие высокому уровню аналитического качества и построения производственных процессов, регулярно подтверждаемому на международном уровне.',
      hasItemDescription: false,
    },
  ],
  caruselItems: [
    {
      title: 'Более',
      span: '500',
      text: 'современных лабораторий, предлагающих широкий спектр различных исследований: гематологических, биохимических, гемостазиологических, иммунологических, микробиологических, цитологических и гистологических, микроскопии, иммуноферментном анализе, а также ПЦР, ДНК-диагностику',
    },
    {
      title: 'Более',
      span: '1600',
      text: 'выполняемых анализов, на суперсовременном оборудование, отвечаютщем всем международным стандартам современной медицины.',
    },
    {
      title: 'Более',
      span: '7,4 млн',
      text: 'пациентов за год проходящих через умелые руки наших высококвалефицированных и отзывчивых сотрудников.',
    },
  ],
};

const frontPageReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default frontPageReduser;
