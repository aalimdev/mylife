import "./header.css";

function Header() {
  const date = new Date();
  const time = date.getDate() + "/" + date.getUTCMonth() + 1 + "/" + date.getFullYear();
  const bd = new Date("09/17/1989");
  const today = new Date();
  const days = Math.round(
    (today.getTime() - bd.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className="header">
      <h2>ALL MY LIFE IN ONE PAGE</h2>
      <div className="header__time">
        <span>Today: <b> {time.toString()}</b></span>
        <span>Number of days lived:<u><b>{days.toString()}</b></u></span>
        
      </div>
    </div>
  );
}

export default Header;
