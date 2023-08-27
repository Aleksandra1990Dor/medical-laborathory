import { BiSolidBabyCarriage } from 'react-icons/bi';
import { TbDisabled, TbOld } from 'react-icons/tb';

const SET_ORIENTATION = 'SET_ORIENTATION';
const CHANGE_CITY = 'CHANGE_CITY';
const SET_FILTER = 'SET_FILTER';
const ADD_SERVIS = 'ADD_SERVIS';
const REMOVE_SERVIS = 'REMOVE_SERVIS';
const PRICE_SUM = 'PRICE_SUM';
const CLEAR_BASKET = 'CLEAR_BASKET';
const QUIT_AUTH = 'QUIT_AUTH';
const LOGIN = 'LOGIN';
const REGISTRATION = 'REGISTRATION';
const CHANGE_VISITER_INFO = 'CHANGE_VISITER_INFO';
const SET_ORDER_INFORMATION = 'SET_ORDER_INFORMATION';
const ADD_CENTER = 'ADD_CENTER';
const DELETE_CENTER = 'DELETE_CENTER';
const ADD_ADRESS = 'ADD_ADRESS';
const initialState = {
  orderInformation: {
    fullName: null,
    dateOfBurn: null,
    sex: null,
    phone: null,
    email: null,
    priceSum: null,
    atHome: false,
    adress: null,
    dateOfDeparture: null,
  },
  visiterInfo: {
    orientation: 'Клиентам',
    city: 'Санкт-Петербург',
    basket: [],
    priceSum: 0,
    isAuth: false,
    name: null,
    fullName: null,
    password: null,
    login: null,
    surName: null,
    fatherName: null,
    dateOfBurn: null,
    sex: null,
    phone: null,
    email: null,
    myCenters: [],
    myAdresses: [],
  },
  searchFilter: [],
  cities: [
    'Москва ',
    'Санкт-Петербург',
    'Екатеринбург ',
    'Новосибирск ',
    'Псков ',
    'Уфа ',
    'Стерлитамак ',
    'Ростов-на-Дону',
    'Белгород ',
  ],
  adresses: {
    'Москва ': [
      'ул. Цюрупы, 14, Москва, Россия, 117418',
      'ул. Новокосинская, 24 корпус 1, Москва, Россия, 111672',
      'Сокольническая пл., 4, 1-2, Москва, Россия, 107113',
      'Ленинский пр-т., 134, Москва, Россия, 119415',
      'Ломоносовский просп., 33 корп. 1, Москва, Россия, 119192',
      'Ореховый б-р, 41, Москва, Россия, 115573',
      'ул. Милашенкова, 7к1, пом.5, Москва, Россия, 127322',
    ],
    'Санкт-Петербург': [
      'пр. Космонавтов, 28, Санкт-Петербург, Россия, 196244',
      'Московский пр-т., 183/185, Санкт-Петербург, Россия, 196066',
      'ул. Шкапина, 9-11, Санкт-Петербург, Россия, 198095',
      'ул. Коллонтай, 28 к. 1, Санкт-Петербург, Россия, 193312',
      'пр. Науки, 17, к.2, Санкт-Петербург, Россия, 195220',
      '5-я Советская ул., 11, Санкт-Петербург, Россия, 191036',
      ' ул. Кораблестроителей, 32 корпус 3, Санкт-Петербург, Россия, 199397',
    ],
    'Екатеринбург ': [
      'ул. 8 Марта, 171, Екатеринбург, Свердловская обл., Россия, 620130',
      'ул. Академика Бардина, 17, Екатеринбург, Свердловская обл., Россия, 620149',
      'Алтайская ул., 62, Екатеринбург, Свердловская обл., Россия, 620023',
      'ул. Избирателей, 110, Екатеринбург, Свердловская обл., Россия, 620042',
      'ЖК Регата, ул. Татищева, 126, Екатеринбург, Свердловская обл., Россия, 620131',
    ],
    'Новосибирск ': [
      '1-е Мочищенское ш., 20, Новосибирск, Новосибирская обл., Россия, 630123',
      'ул. Романтиков, 8, Новосибирск, Новосибирская обл., Россия, 630041',
      ' ул. Титова, 21, Новосибирск, Новосибирская обл., Россия, 630054',
      'пр. Дзержинского, 28, Новосибирск, Новосибирская обл., Россия, 630015',
      'ул. Семьи Шамшиных, 26/1, Офис 5.1, Новосибирск, Новосибирская обл., Россия, 630099',
    ],
    'Псков ': [
      'Инженерная ул., 108/62, Псков, Псковская обл., Россия, 180019',
      'ул. Кузбасской Дивизии, 26а, Псков, Псковская обл., Россия, 180016',
    ],
    'Уфа ': [
      'Бакалинская ул., 19, Уфа, Респ. Башкортостан, Россия, 450022',
      'ул. Ленина, 156, Уфа, Респ. Башкортостан, Россия, 450006',
      'Касимовская ул., 16, Уфа, Респ. Башкортостан, Россия, 450028',
    ],
    'Стерлитамак ': [
      'ул. Артема, 143, Стерлитамак, Респ. Башкортостан, Россия, 453100',
      'ул. Шафиева, 1, Стерлитамак, Респ. Башкортостан, Россия, 453126',
      'ул. Голикова, 1, помещение III, Стерлитамак, Респ. Башкортостан, Россия, 453103',
    ],
    'Ростов-на-Дону': [
      'б-р Комарова, 30, Ростов-на-Дону, Ростовская обл., Россия, 344113',
    ],
    'Белгород ': [
      'ул. Губкина, 25, Белгород, Белгородская обл., Россия, 308036',
    ],
  },
  adressIconsInfo: [
    { icon: <TbDisabled />, description: 'Вход для инвлидов' },
    {
      icon: <BiSolidBabyCarriage />,
      description: 'Вход с колясками',
    },
    { icon: <TbOld />, description: 'Помощь для пожилых людей' },
  ],
  adressesInfoTitles: ['Приём анализов (кроме COVID-19)', 'ПЦР-тесты COVID-19'],
  schedule: [
    ['Пн. – пт.', '	7:30 – 17:15'],
    ['Сб.', '7:30 – 14:15'],
    ['Вс.', 'Выходной'],
  ],
  phones: [
    {
      phone: '8-800-05-50-05',
    },
    {
      phone: '8-800-44-32-52',
    },
  ],
  achivments: [
    { text: 'лабораторий по всей россии', title: '+500' },
    { text: 'выполняемых анализов', title: '+1600' },
    { text: 'пациентов за год', title: '+7,4 млн' },
    { text: 'квалифицированных сотудников', title: '+12050' },
    { text: ' на рынке медицинских услуг', title: '+8 лет' },
  ],
};
const mainInfoReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORIENTATION:
      return {
        ...state,
        visiterInfo: { ...state.visiterInfo, orientation: action.orientation },
      };

    case CHANGE_CITY:
      return {
        ...state,
        visiterInfo: { ...state.visiterInfo, city: action.city },
      };
    case SET_FILTER:
      return {
        ...state,
        searchFilter: action.results,
      };
    case ADD_SERVIS:
      if (state.visiterInfo.basket.includes(action.servis)) {
        return state;
      }
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          basket: [...state.visiterInfo.basket, action.servis],
        },
      };
    case REMOVE_SERVIS:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          basket: state.visiterInfo.basket.filter(
            (good, index) => index !== action.index
          ),
          priceSum: (state.visiterInfo.priceSum -= action.price),
        },
      };
    case DELETE_CENTER:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          myCenters: state.visiterInfo.myCenters.filter(
            (center) => center !== action.center
          ),
          myAdresses: state.visiterInfo.myAdresses.filter(
            (center) => center !== action.center
          ),
        },
      };
    case PRICE_SUM:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          priceSum: (state.visiterInfo.priceSum += action.priceSum),
        },
      };
    case CLEAR_BASKET:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          basket: [],
          priceSum: 0,
        },
      };
    case QUIT_AUTH:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          isAuth: false,
          name: null,
          fullName: null,
          password: null,
          login: null,
          surName: null,
          fatherName: null,
          dateOfBurn: null,
          sex: null,
          phone: null,
          email: null,
        },
      };
    case ADD_CENTER:
      if (state.visiterInfo.myCenters.includes(action.center)) {
        return state;
      }
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          myCenters: [...state.visiterInfo.myCenters, action.center],
        },
      };
    case ADD_ADRESS:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          myAdresses: [...state.visiterInfo.myAdresses, action.adress],
        },
      };
    case LOGIN:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          isAuth: true,
          login: action.login,
          password: action.password,
          name: action.name,
          fullName: `${action.name} ${action.surName}`,
          surName: action.surName,
        },
      };
    case REGISTRATION:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          isAuth: true,
          login: action.login,
          password: action.password,
          name: action.name,
          surName: action.surName,
          fullName: `${action.name} ${action.surName}`,
          city: action.city,
        },
      };
    case CHANGE_VISITER_INFO:
      return {
        ...state,
        visiterInfo: {
          ...state.visiterInfo,
          fatherName: action.fatherName,
          fullName: action.fullName + ` ${action.fatherName}`,
          dateOfBurn: action.dateOfBurn,
          sex: action.sex,
          phone: action.phone,
          email: action.email,
        },
      };
    case SET_ORDER_INFORMATION:
      return {
        ...state,
        orderInformation: {
          ...state.orderInformation,
          fullName: action.fullName,
          dateOfBurn: action.dateOfBurn,
          sex: action.sex,
          phone: action.phone,
          email: action.email,
          atHome: action.atHome,
          adress: action.adress,
          dateOfDeparture: action.dateOfDeparture,
          priceSum: state.visiterInfo.priceSum,
        },
      };
    default:
      return state;
  }
};
export const deleteCenterAC = (center) => ({ type: DELETE_CENTER, center });
export const addAdressAC = (adress) => ({ type: ADD_ADRESS, adress });
export const addCenterAC = (center) => ({ type: ADD_CENTER, center });
export const setOrderInformationAC = (
  fullName,
  dateOfBurn,
  sex,
  phone,
  email,
  atHome,
  adress,
  dateOfDeparture
) => ({
  type: SET_ORDER_INFORMATION,
  fullName,
  dateOfBurn,
  sex,
  phone,
  email,
  atHome,
  adress,
  dateOfDeparture,
});
export const changeVisiterInfoAC = (
  fatherName,
  dateOfBurn,
  sex,
  phone,
  email
) => ({
  type: CHANGE_VISITER_INFO,
  fatherName,
  dateOfBurn,
  sex,
  phone,
  email,
});

export const registrationAC = (login, password, name, surName, city) => ({
  type: REGISTRATION,
  login,
  password,
  name,
  surName,
  city,
});
export const loginAC = (login, password, name, surName) => ({
  type: LOGIN,
  login,
  password,
  name,
  surName,
});
export const quitAuthAC = () => ({ type: QUIT_AUTH });
export const clearBasketAC = (sum, basket) => ({
  type: CLEAR_BASKET,
});
export const getPriceSumAC = (priceSum) => ({ type: PRICE_SUM, priceSum });
export const removeServisAC = (index, price) => ({
  type: REMOVE_SERVIS,
  index,
  price,
});
export const addServisToBasketAC = (servis) => ({ type: ADD_SERVIS, servis });
export const setResultsAC = (results) => ({ type: SET_FILTER, results });
export const changeOrientationAC = (orientation) => ({
  type: SET_ORIENTATION,
  orientation,
});
export const changeCityAC = (city) => ({ type: CHANGE_CITY, city });
export default mainInfoReduser;
