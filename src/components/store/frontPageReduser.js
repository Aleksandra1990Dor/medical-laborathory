import geneticCard from '../../img/card-genetic.jpg';
import heartInfoCard from '../../img/card-heartinfo.jpg';
import diabetCard from '../../img/diabet-card.jpg';
import conferentoinsForDoctors from '../../img/card-conferentions.jpg';
import partnerProgramsCard from '../../img/card-partners-programs.jpg';
import saveMoneyCard from '../../img/card-savemoney.jpg';
import organisationCard from '../../img/card-organisations.jpg';
import franshizaCard from '../../img/card-franshiza.jpg';
import becomeAPartnerCard from '../../img/card-become-partner.jpg';
import heartTest from '../../img/heart-test.png';
import covidTest from '../../img/covid-test.png';
import bagTest from '../../img/bag-test.png';
import map from '../../img/map.jpg';
import stepOne from '../../img/quality-1.svg';
import stepTwo from '../../img/quality-2.svg';
import stepThree from '../../img/quality-3.svg';

const initialState = {
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
        ' – подготовка пациента, назначение исследования, регистрация и взятие биоматериала, транспортировка в лабораторию, сортировка образцов.',
    },
    {
      id: 2,
      title: 'Шаг второй',
      src: stepTwo,
      alt: 'выезд на дом',
      description:
        ' – непосредственное проведение лабораторного исследования, включая проведение мероприятий по контролю качества.',
    },
    {
      id: 3,
      title: 'Шаг третий',
      src: stepThree,
      alt: 'Шаг третий',
      description:
        '– валидация полученного результата исследования врачом лаборатории, лабораторное заключение, выдача результата пациенту или лечащему врачу и решение на основе результатов исследования',
    },
  ],
  frontPageLinks: [
    {
      id: 1,
      title: 'Сдать анализы',
      src: heartTest,
      alt: 'сердце',
      link: 'analysis/popularAnalysis',
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
      link: 'analysis/covidTests',
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
      link: 'analys/5',
    },
    {
      id: 2,
      src: geneticCard,
      title: 'Генетические причины бесплодия',
      price: '9 340 ₽',
      alt: 'Исследуй свою генетику',
      link: 'analys/1',
    },
    {
      id: 3,
      title: 'Расширенное обследование сердца и сосудов',
      price: '1 100 ₽',
      src: heartInfoCard,
      alt: 'Познай своё сердце',
      link: 'analys/35',
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
};

const frontPageReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default frontPageReduser;
