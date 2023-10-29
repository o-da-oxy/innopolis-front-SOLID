import { useLocation } from 'react-router-dom';
import { ApiService } from './apiService';

export type ResultType = {
  peopleCountInGroup: any;
  isPresentCount: any;
  peopleCountOnPhoto: any;
  imageUrl: string;
};

export interface ResultServiceInterface {
  getResult(): ResultType | null;
}

export class ResultService implements ResultServiceInterface {
  getResult() {
    const location = useLocation();
    const apiService = new ApiService();

    if (location.state !== null) {
      const {
        peopleCountInGroup,
        isPresentCount,
        peopleCountOnPhoto,
        imagePath,
      }: any = location.state;

      const imageUrl = apiService.getImageUrl(imagePath);

      return {
        peopleCountInGroup,
        isPresentCount,
        peopleCountOnPhoto,
        imageUrl,
      };
    } else {
      return null;
    }
  }
}
