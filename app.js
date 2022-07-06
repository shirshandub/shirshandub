const clearLocalStorage = () => {
  localStorage.clear();
  console.log("%c CLEANED", "background: green; color: white; display: block;");
  alert("Cleaned");
};
