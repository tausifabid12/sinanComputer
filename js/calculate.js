if (localStorage.getItem("clickCount") === null) {
  localStorage.setItem("clickCount", 0);
}
let clickCount = parseInt(localStorage.getItem("clickCount"));
// doing shop calculatin

const calculate = () => {
  clickCount++;
  const oneT = isEmty(getInputValue("oneT")) * 1000;
  const fiveH = isEmty(getInputValue("fiveH")) * 500;
  const oneH = isEmty(getInputValue("oneH")) * 100;
  const fifty = isEmty(getInputValue("fifty")) * 50;
  const twenty = isEmty(getInputValue("twenty")) * 20;
  const ten = isEmty(getInputValue("ten")) * 10;
  const bkash = isEmty(getInputValue("bkash"));
  const rocket = isEmty(getInputValue("rocket"));
  const nagad = isEmty(getInputValue("nagad"));
  const gp = isEmty(getInputValue("gp"));
  const banglalink = isEmty(getInputValue("banglalink"));
  const robi = isEmty(getInputValue("robi"));
  const airtel = isEmty(getInputValue("airtel"));

  const totalCash = oneT + oneH + fiveH + fifty + twenty + ten;
  const grandTotal =
    totalCash + bkash + rocket + nagad + gp + banglalink + robi + airtel;
  const caclculationObj = {
    bkash: bkash,
    rocket: rocket,
    nagad: nagad,
    totalCash: totalCash,
    grandTotal: grandTotal,
  };

  const stringifcalculation = JSON.stringify(caclculationObj);
  localStorage.setItem(`calculationTotal${clickCount}`, stringifcalculation);
  localStorage.setItem("clickCount", clickCount);
  location.reload();
};

const showRecords = () => {
  const itemNum = parseInt(localStorage.getItem("clickCount"));
  const moneyRecord = document.getElementById("moneyRecord");
  const moneyRecordHome = document.getElementById("moneyRecordHome");
  // console.log(document.getElementById("moneyRecord"));
  const date1 = new Date().toISOString();
  const fixedDate1 = date1.slice(0, 10);
  for (let i = 1; i <= itemNum; i++) {
    const data = JSON.parse(localStorage.getItem(`calculationTotal${i}`));
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td scope="row">${fixedDate1}</td>
      <td>${data.totalCash}</td>
      <td>${data.bkash}</td>
      <td>${data.nagad}</td>
      <td>${data.rocket}</td>
      <td>${data.grandTotal}</td>
      
      `;
    moneyRecord.prepend(tr);
    // moneyRecordHome.prepend(tr);
  }
};
showRecords();
