const getEById = (id) => {
  const element = document.getElementById(id);
  return element;
};

const getInputValue = (id) => {
  const element = getEById(id).value;
  const elementint = parseInt(element);
  element.value = "";
  return elementint;
};

// cheacking emty element
const isEmty = (value) => {
  if (isNaN(value)) {
    return 0;
  } else {
    return value;
  }
};
