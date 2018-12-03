const toCapitalize = (str) => {
  return str.slice(0,1).toUpperCase() + str.slice(1, str.length);
}

export { toCapitalize };