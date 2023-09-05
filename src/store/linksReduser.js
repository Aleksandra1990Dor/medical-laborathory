import { BsCardChecklist } from 'react-icons/bs';
import { FaAmbulance } from 'react-icons/fa';
import { GiDrippingTube } from 'react-icons/gi';

const initialState = {
  headerMainLinks: [
    {
      text: 'Клиентам',
      href: '.',
    },
    {
      text: 'Организациям',
      href: 'for-organisations',
    },
    {
      text: 'Врачам',
      href: 'for-doctors',
    },
  ],
  headerHiddenLinks: [
    {
      title: 'Контакты',
      href: 'about/contacts',
    },
    {
      title: 'Лицензии и сертификаты',
      href: 'about/licenses',
    },
    {
      title: 'Контроль качества',
      href: 'about/quality-control',
    },
    {
      title: 'Вакансии',
      href: 'about/job-openings',
    },
  ],
  navLinks: [
    {
      title: 'Анализы',
      links: [
        {
          title: 'Популярные анализы',
          href: 'servises/analysis/popularAnalysis',
          key: 'popularAnalysis',
        },
        {
          title: 'Клинические анализы крови',
          href: 'servises/analysis/clinickBloodtests',
          key: 'clinickBloodtests',
        },
        {
          title: 'Генетические исследования',
          href: 'servises/analysis/geneticTests',
          key: 'geneticTests',
        },
        {
          title: 'Биохимия крови',
          href: 'servises/analysis/biochimicBloodtests',
          key: 'biochimicBloodtests',
        },
        {
          title: 'Анализы на COVID-19',
          href: 'servises/analysis/covidTests',
          key: 'covidTests',
        },
        {
          title: 'Анализы мочи',
          href: 'servises/analysis/urineTests',
          key: 'urineTests',
        },
        {
          title: 'Анализы кала',
          href: 'servises/analysis/faecesTests',
          key: 'faecesTests',
        },
      ],
    },
    {
      title: 'Акции',
      links: [
        {
          title: 'Все акции',
          href: 'servises/actions-page',
        },
        {
          title: 'Важнейшие витамины',
          href: 'servises/analysis/analys/201',
        },
        {
          title: 'Формула здоровья',
          href: 'servises/analysis/analys/202',
        },
        {
          title: 'Комплексное обследование женского здоровья',
          href: 'servises/analysis/analys/203',
        },
        {
          title: 'Комплексное обследование щитовидной железы',
          href: 'servises/analysis/analys/204',
        },
        {
          title: 'Проверьте работу сердца',
          href: 'servises/analysis/analys/205',
        },
      ],
    },
    {
      title: 'Консультация врача',
      links: [
        {
          title: 'Консультация невролога',
          href: 'servises/doctors/nevrolog',
          key: 'nevrolog',
        },
        {
          title: 'Консультация инфекциониста',
          href: 'servises/doctors/infectionists',
          key: 'infectionists',
        },
        {
          title: 'Консультация гинеколога',
          href: 'servises/doctors/genecolog',
          key: 'genecolog',
        },
        {
          title: 'Консультация генетика',
          href: 'servises/doctors/genetic',
          key: 'genetic',
        },
        {
          title: 'Консультация педиатра',
          href: 'servises/doctors/pediatr',
          key: 'pediatr',
        },
      ],
    },
    {
      title: 'Адреса',
      links: 'about/adresses',
    },
    {
      title: 'Выезд на дом',
      links: 'about/home-servis',
    },

    {
      title: 'COVID-19',
      links: 'servises/analysis/covidTests',
    },
    {
      title: 'Другое',
      links: 'servises/other-servises',
    },
  ],
  personalAreaLinks: [
    {
      title: 'Мои анализы',
      link: 'analysis',
    },
    {
      title: 'Мои данные',
      link: '.',
    },
    {
      title: 'Моя динамика',
      link: 'dynamics',
    },
  ],
  mobileIconsLinks: [
    {
      link: '/medical-laborathory/servises/actions-page',
      icon: <BsCardChecklist />,
      text: 'Акции',
    },
    {
      link: '/medical-laborathory/servises/analysis/popularAnalysis',
      icon: <GiDrippingTube />,
      text: 'Анализы',
    },
    {
      link: '/medical-laborathory/about/home-servis',
      icon: <FaAmbulance />,
      text: 'Выезд на дом',
    },
  ],
};

const linksReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default linksReduser;
