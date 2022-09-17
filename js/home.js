if (localStorage.getItem("clickCount") === null) {
  localStorage.setItem("clickCount", 0);
}
let clickCount = parseInt(localStorage.getItem("clickCount"));
const showRecordsHome = () => {
  const itemNum = parseInt(localStorage.getItem("clickCount"));
  const moneyRecordHome = document.getElementById("moneyRecordHome");
  const date = new Date().toISOString();
  const fixedDate = date.slice(0, 10);
  for (let i = 1; i <= itemNum; i++) {
    const data = JSON.parse(localStorage.getItem(`calculationTotal${i}`));
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td scope="row">${fixedDate}</td>
        <td>${data.totalCash}</td>
        <td>${data.bkash}</td>
        <td>${data.nagad}</td>
        <td>${data.rocket}</td>
        <td>${data.grandTotal}</td>
        
        `;
    moneyRecordHome.prepend(tr);
  }
};
showRecordsHome();
