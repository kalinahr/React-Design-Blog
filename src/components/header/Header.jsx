
import "./header.css";

export default function Header() {
  return (
   <>
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Kali Desgin</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.create.vista.com/api/media/medium/196749308/stock-photo-open-book-front-stack-books?token="
        alt=""
      />
    </div>
   </>
    
  );
}