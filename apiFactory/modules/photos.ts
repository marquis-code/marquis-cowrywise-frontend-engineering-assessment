import { GATEWAY_ENDPOINT } from '../axios.config'
export const unsplash_api = {
    $_get_photos: () => {
        let url = '/photos/';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_search_photos: (searchTerm: string) => {
        let url = `/search/photos?query=${searchTerm}`;
        return GATEWAY_ENDPOINT.get(url);
      }
}
