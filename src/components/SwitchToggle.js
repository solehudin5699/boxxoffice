import React, { useState } from 'react';
import Switch from 'react-switch';

export default function SwitchToggle({
  label = '',
  labelPosition = 'right',
  onChange = (checked) => {},
  containerStyle = {},
  containerClass = '',
  labelStyle = {},
  labelClass = '',
}) {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked) => {
    setChecked(checked);
    onChange(checked);
  };
  return (
    <div style={containerStyle} className={containerClass}>
      <label
        htmlFor="small-radius-switch"
        className="d-flex align-items-center"
      >
        {labelPosition === 'left' && (
          <span className={`me-1 ${labelClass}`} style={labelStyle}>
            {label}
          </span>
        )}
        <Switch
          checked={checked}
          onChange={handleChange}
          handleDiameter={20}
          offColor="#E8E8E8"
          onColor="#C3D1EF"
          offHandleColor="#FFFFFF"
          onHandleColor="#192A55"
          height={20}
          width={40}
          // borderRadius={6}
          // activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={null}
          checkedIcon={null}
          uncheckedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                border: 'none',
                color: '#828282',
              }}
            >
              <i class="fa fa-times" aria-hidden="true"></i>
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                color: '#FFFFFF',
                fontSize: 15,
              }}
            >
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
          }
          id="small-radius-switch"
        />
        {labelPosition === 'right' && (
          <span className={`ms-1 ${labelClass}`} style={labelStyle}>
            {label}
          </span>
        )}
      </label>
    </div>
  );
}
