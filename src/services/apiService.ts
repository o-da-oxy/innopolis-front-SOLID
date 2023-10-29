export interface ApiServiceInterface {
  postImage(formData: FormData): Promise<any>;
  getImageUrl(imagePath: any): string;
}

export class ApiService implements ApiServiceInterface {
  async postImage(formData: FormData) {
    try {
      const response = await fetch('http://127.0.0.1/api/image', {
        method: 'POST',
        body: formData,
      });

      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getImageUrl(imagePath: any) {
    return `http://localhost${imagePath}`;
  }
}
