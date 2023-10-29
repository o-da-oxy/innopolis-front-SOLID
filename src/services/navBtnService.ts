import { ApiService } from './apiService';

interface resultType {
  peopleCountInGroup: number;
  peopleCountOnPhoto: any;
  isPresentCount: number | null;
  imagePath: any;
}

export interface NavBtnInterface {
  handlePostImageButtonClick(
    selectedFile: any,
    peopleCount: number | undefined
  ): Promise<resultType | string>;
}

export class NavBtnService implements NavBtnInterface {
  async handlePostImageButtonClick(
    selectedFile: any,
    peopleCount: number | undefined
  ): Promise<resultType | string> {
    if (selectedFile && peopleCount) {
      const apiService = new ApiService();
      const formData = new FormData();

      formData.append('image', selectedFile);

      const result = await apiService.postImage(formData);

      if (result !== null) {
        const isPersentCount = peopleCount
          ? Math.floor((result.human_count / peopleCount) * 100)
          : null;

        const state = {
          peopleCountInGroup: peopleCount,
          peopleCountOnPhoto: result.human_count,
          isPresentCount: isPersentCount,
          imagePath: result.image_path,
        };

        return state;
      } else {
        return 'Fetch error!';
      }
    } else {
      return 'Please, enter count of people in group and load a photo!';
    }
  }
}
