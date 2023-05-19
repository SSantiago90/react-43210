import mobilePhones from "../data/mobiles";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mobilePhones)), 1000;
  });
}

/* AsynMock Promise ----------------------------------------------- */
function getItemData(idURL) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const requestedItem = mobilePhones.find(
        (item) => item.id === Number(idURL)
      );
      resolve(requestedItem);
    }, 1000);
  });
}
/* --------------------------------------------------------------- */

export { getData, getItemData };
