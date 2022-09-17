if (localStorage.getItem("lendItem") === null) {
  localStorage.setItem("lendItem", 0);
}
let lendItem = parseInt(localStorage.getItem("lendItem"));

const calculateLend = () => {
  lendItem++;
  const payeeName = document.getElementById("name");
  const payeeNameValue = payeeName.value;
  payeeName.value = "";
  const amount = getInputValue("amount");

  const lendObj = { payeeName: payeeNameValue, amount: amount };
  const sringifylend = JSON.stringify(lendObj);
  localStorage.setItem(`lends${lendItem}`, sringifylend);
  localStorage.setItem("lendItem", lendItem);
  location.reload();
};

const showLends = () => {
  const lendItems = parseInt(localStorage.getItem("lendItem"));
  const lendRecordBook = getEById("lendRecordBook");
  const date2 = new Date().toISOString();
  const fixedDate2 = date2.slice(0, 10);
  for (let i = 1; i <= lendItems; i++) {
    const lendData = JSON.parse(localStorage.getItem(`lends${i}`));
    const lendTr = document.createElement("tr");
    console.log(lendData.payeeName);
    lendTr.innerHTML = `
    <td scope="row">${fixedDate2}</td>
    <td>${lendData.payeeName}</td>
    <td>${lendData.amount}</td>
  

    `;
    lendRecordBook.prepend(lendTr);
  }
};

showLends();
