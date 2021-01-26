function Toaster(typeToaster, msg, color="rebeccapurple") {
  typeToaster = !typeToaster ? "" : typeToaster;
  let icon = "";
  switch(typeToaster.trim().toLowerCase()){
    case "warning":
      icon = "⚠️";
      break;
    case "error":
      icon = "❌";
      break;
    case "valid":
      icon = "✅";
      break;
    case "info":
      icon = "ⓘ";
      break;
    default:
      icon = "";
  }
  if(!document.querySelector('#toast')){
    let t = document.createElement('div');
    t.id = "toast";
    t.style = "position: fixed; z-index: 999; bottom: 0.5em; right: 0.5em; display: flex; flex-direction: column; max-width: 100%";
    document.body.appendChild(t);
  }
  const b = document.querySelector('#toast');
  let t = document.createElement('div');
  t.onclick = () => {t.remove()};
  t.style = `cursor: pointer; min-width: 12em; display: flex; flex-direction: row; color: #fff; background-color: ${color}; margin: 0.5em; text-align: center; flex: 1 1 auto`;
  if(icon != "") t.innerHTML =   
  `<div style="margin: 0">
    <p style="margin-left: 0.5em; white-space: nowrap; cursor: pointer">${icon}</p>
  </div>`;
  t.innerHTML += `
  <div style="flex: 1 1; margin: 0">
    <p style="white-space: nowrap; cursor: pointer; margin-left: 0.5em; margin-right: 0.5em">${msg}</p>
  </div>
  `;
  b.appendChild(t);
  setTimeout(() => {
    t.remove();
  }, 10000);
}