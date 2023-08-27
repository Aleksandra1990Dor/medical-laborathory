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
          href: 'analysis/popularAnalysis',
          key: 'popularAnalysis',
        },
        {
          title: 'Клинические анализы крови',
          href: 'analysis/clinickBloodtests',
          key: 'clinickBloodtests',
        },
        {
          title: 'Генетические исследования',
          href: 'analysis/geneticTests',
          key: 'geneticTests',
        },
        {
          title: 'Биохимия крови',
          href: 'analysis/biochimicBloodtests',
          key: 'biochimicBloodtests',
        },
        {
          title: 'Анализы на COVID-19',
          href: 'analysis/covidTests',
          key: 'covidTests',
        },
        {
          title: 'Анализы мочи',
          href: 'analysis/urineTests',
          key: 'urineTests',
        },
        {
          title: 'Анализы кала',
          href: 'analysis/faecesTests',
          key: 'faecesTests',
        },
      ],
    },
    {
      title: 'Акции',
      links: [
        {
          title: 'Все акции',
          href: 'actions-page',
        },
        {
          title: 'Важнейшие витамины',
          href: 'analys/201',
        },
        {
          title: 'Формула здоровья',
          href: 'analys/202',
        },
        {
          title: 'Комплексное обследование женского здоровья',
          href: 'analys/203',
        },
        {
          title: 'Комплексное обследование щитовидной железы',
          href: 'analys/204',
        },
        {
          title: 'Проверьте работу сердца',
          href: 'analys/205',
        },
      ],
    },
    {
      title: 'Консультация врача',
      links: [
        {
          title: 'Консультация невролога',
          href: 'doctors/nevrolog',
          key: 'nevrolog',
        },
        {
          title: 'Консультация инфекциониста',
          href: 'doctors/infectionists',
          key: 'infectionists',
        },
        {
          title: 'Консультация гинеколога',
          href: 'doctors/genecolog',
          key: 'genecolog',
        },
        {
          title: 'Консультация генетика',
          href: 'doctors/genetic',
          key: 'genetic',
        },
        {
          title: 'Консультация педиатра',
          href: 'doctors/pediatr',
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
      links: 'analysis/covidTests',
    },
    {
      title: 'Другое',
      links: 'other-servises',
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
};

const linksReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default linksReduser;
