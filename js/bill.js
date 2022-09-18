if (localStorage.getItem("billCount") === null) {
  localStorage.setItem("billCount", 0);
}
let billCount = parseInt(localStorage.getItem("billCount"));
console.log(billCount, "this is form to");

const storeBill = () => {
  billCount++;
  const consumarNo = getInputValue("consumarNo");
  const mounth = getInputValue("mounth");
  const billAmount = getInputValue("billAmount");
  const trxId = getInputValue("trxId");
  console.log(billCount, "this is form store bill");
  const billObj = {
    consumarNo: consumarNo,
    mounth: mounth,
    billAmount: billAmount,
    trxId: trxId,
  };
  const sringifybill = JSON.stringify(billObj);
  localStorage.setItem(`bills${billCount}`, sringifybill);
  localStorage.setItem("billCount", billCount);
  location.reload();
};

const showbills = () => {
  const billCount = parseInt(localStorage.getItem("billCount"));
  const billRecord = getEById("billRecord");
  const date3 = new Date().toISOString();
  const fixedDate3 = date3.slice(0, 10);
  console.log(billCount, "this is form show bill");
  for (let i = 1; i <= billCount; i++) {
    const billData = JSON.parse(localStorage.getItem(`bills${i}`));
    const billTr = document.createElement("tr");
    console.log(billData);
    billTr.innerHTML = `
      <td scope="row">${fixedDate3}</td>
      <td>${billData.consumarNo}</td>
      <td>${billData.mounth}</td>
      <td>${billData.billAmount}</td>
      <td>${billData.trxId}</td>
    
  
      `;
    billRecord.prepend(billTr);
  }
};

showbills();
