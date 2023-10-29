import React from 'react';
import './NavBtn.css';
import { NavBtnService } from '../../services/navBtnService';
import { useNavigate } from 'react-router';

const NavBtn: React.FC<{
  text: string;
  peopleCount?: number;
  selectedFile?: any;
}> = (props) => {
  const { text, selectedFile, peopleCount } = props;
  const navBtnService = new NavBtnService();
  const navigate = useNavigate();

  const clickHandler = () => {
    if (text === 'Show Result') {
      const state = navBtnService.handlePostImageButtonClick(
        selectedFile,
        peopleCount
      );
      state
        .then((result) => {
          if (typeof result !== 'string') {
            navigate('/result', { state });
          } else {
            alert(result);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (text === 'Back') {
      navigate('/');
    }
  };

  return (
    <div className="nav">
      <button type="button" className="navButton" onClick={clickHandler}>
        {text}
      </button>
    </div>
  );
};

export default NavBtn;
