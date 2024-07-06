

function Theme({toogletheme , darkTheme} ) {
 


  return (
  <div className="theme-btn">
    
      <button className="theme-btn" onClick={toogletheme} >
        Switch to {darkTheme ? 'Light' : 'Dark'} Theme
        </button>
        </div>
  );
}
export default Theme;
