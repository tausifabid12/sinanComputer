if (localStorage.getItem("spendCount") === null) {
  localStorage.setItem("spendCount", 0);
}
let spendCount = parseInt(localStorage.getItem("spendCount"));
console.log(spendCount, "this is form to");

const saveSpend = () => {
  spendCount++;
  const reason = getInputValue("reason");
  const spendAmount = getInputValue("spendAmount");
  const spendObj = {
    reason: reason,
    spendAmount: spendAmount,
  };
  const sringifyspend = JSON.stringify(spendObj);
  localStorage.setItem(`spends${spendCount}`, sringifyspend);
  localStorage.setItem("spendCount", spendCount);
  location.reload();
};

const showspends = () => {
  const spendCount = parseInt(localStorage.getItem("spendCount"));
  const spendRecord = getEById("spendRecord");
  const date3 = new Date().toISOString();
  const fixedDate3 = date3.slice(0, 10);
  for (let i = 1; i <= spendCount; i++) {
    const spendData = JSON.parse(localStorage.getItem(`spends${i}`));
    console.log(JSON.parse(localStorage.getItem(`spends${i}`)));
    const spendTr = document.createElement("tr");
    console.log(spendData);
    spendTr.innerHTML = `
      <td scope="row">${fixedDate3}</td>
      <td>${spendData.reason}</td>
      <td>${spendData.spendAmount}</td>
    
    
  
      `;
    spendRecord.prepend(spendTr);
  }
};

showspends();
