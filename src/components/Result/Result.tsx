import React from 'react';
import NavBtn from '../NavBtn/NavBtn';
import './Result.css';
import { ResultService } from '../../services/resultService';

const Result = () => {
  const resultService = new ResultService();
  const result = resultService.getResult();

  if (result !== null) {
    const { imageUrl, peopleCountInGroup, peopleCountOnPhoto, isPresentCount } =
      result;
    return (
      <div>
        {imageUrl ? (
          <div>
            <p>Count of people in group: {peopleCountInGroup}</p>
            <p>Count of people on photo: {peopleCountOnPhoto}</p>
            <p>Is Present: {isPresentCount ?? 0} %</p>
            <img src={imageUrl} alt="Selected File" />
          </div>
        ) : (
          <p>Please, load a photo!</p>
        )}
        <NavBtn text="Back" />
      </div>
    );
  } else {
    return (
      <div>
        <p>Please, load a photo!</p>
        <NavBtn text="Back" />
      </div>
    );
  }
};

export default Result;
