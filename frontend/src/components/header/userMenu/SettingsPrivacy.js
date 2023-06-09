export default function SettingsPrivacy( { setVisible } ) {
  return (
    <div className="absolute_wrap">
      <div className="absolute_wrap_header">
        <div 
          className="circle"
          onClick={() => {
            setVisible(0);
          }}
        >
          <i className="arrow_back_icon"></i>
        </div>
        Settings & privacy
      </div>
      <div className="mmenu_item hover3">
        <div className="small_circle">
          <i className="settings_filled_icon"></i>
        </div>
        <span>Settings</span>
      </div>
    </div>
  );
}
