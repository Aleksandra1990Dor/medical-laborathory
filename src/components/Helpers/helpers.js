// this function checking goods lenght and returning correct word for description

export const checkGoods = (basket) => {
  if (!basket) {
    return false;
  } else if (basket.length === 1) {
    return 'товар';
  } else if (basket.length <= 4) {
    return 'товара';
  } else {
    return 'товаров';
  }
};

// function for async timeout effects with css

export const timeOut = (time, callBack, toggleClass) => {
  setTimeout(() => {
    callBack(toggleClass);
  }, time);
};

//  searching function for input in header

export const analysisSearching = (analysis, value) => {
  // get single array from all analysis pages
  const analysisArray = Object.values(analysis).reduce((prev, item) => {
    return prev.concat(item);
  });
  //filter array by title or desccription
  let searchResult = analysisArray.filter((analys) => {
    if (
      analys.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
      analys.smallDescription
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase())
    ) {
      return analys;
    }
    return null;
  });
  //if array is empty pushing result 'no surch value'
  if (!searchResult.length) searchResult.push('Ничего не найдено');
  //return array with results from function
  return searchResult;
};

// function finding analys by id from params for analys page

export const findAnalysById = (analysis, id) => {
  // get single array from all analysis pages
  const analysisArray = Object.values(analysis).reduce((prev, item) => {
    return prev.concat(item);
  });
  // finding the right analys
  const res = analysisArray.find((analys) => analys.id.toString() === id);
  // returning result
  return res;
};
