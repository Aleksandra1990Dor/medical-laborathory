const initialState = {
  nevrolog: [
    {
      id: 308,
      title: 'Консультация врача невролога',
      fullName: 'Павлов Виктор Иванович',
      experience: '18 лет',
      price: 2500,
      time: '30 минут',
    },
    {
      id: 309,
      title: 'Консультация врача невролога',
      fullName: 'Бондарева Ольга Петровна',
      experience: '10 лет',
      price: 2500,
      time: '30 минут',
    },
  ],
  infectionists: [
    {
      id: 301,
      title: 'Консультация врача инфекциониста',
      fullName: 'Иванов Иван Иванович',
      experience: '20 лет',
      price: 2500,
      time: '30 минут',
    },
    {
      id: 302,
      title: 'Консультация врача инфекциониста',
      fullName: 'Васильева Ольга Петровна',
      experience: '18 лет',
      price: 2500,
      time: '30 минут',
    },
  ],
  genetic: [
    {
      id: 303,
      title: 'Консультация врача генетика',
      fullName: 'Васильев Пётр Иванович',
      experience: '13 лет',
      price: 2500,
      time: '30 минут',
    },
    {
      id: 304,
      title: 'Консультация врача генетика',
      fullName: 'Васильева Елена Валерьевна',
      experience: '8 лет',
      price: 2500,
      time: '30 минут',
    },
  ],
  genecolog: [
    {
      id: 305,
      title: 'Консультация врача гинеколога',
      fullName: 'Жданов Василий Васильевич',
      experience: '20 лет',
      price: 2500,
      time: '30 минут',
    },
    {
      id: 306,
      title: 'Консультация врача гинеколога',
      fullName: 'Сергеев Андрей Петрович',
      experience: '18 лет',
      price: 2500,
      time: '30 минут',
    },
  ],
  pediatr: [
    {
      id: 307,
      title: 'Консультация врача педиатра',
      fullName: 'Бондарева Ольга Петровна',
      experience: '10 лет',
      price: 2500,
      time: '30 минут',
    },
  ],
};

const doctorsReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default doctorsReduser;
