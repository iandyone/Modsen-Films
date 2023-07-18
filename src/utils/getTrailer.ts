import $axios from '@config/axios';
import { IVideoResponse, VideoSource, VideoType } from '@constants/types';

export async function getTrailer(movieID: number) {
  try {
    const response = await $axios.get<IVideoResponse>(`https://api.themoviedb.org/3/movie/${movieID}/videos`);

    if (response.data) {
      const trailler = response.data.results?.find((videoData) => videoData.type === VideoType.TRAILER && videoData.site === VideoSource.YOUTUBE);

      // return trailler ? `https://www.youtube.com/embed/${trailler.key}` : 'NOOOOOOOOOO';
      return trailler.key;
    }
  } catch (error) {
    console.log(error);
  }
}
