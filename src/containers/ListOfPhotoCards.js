import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCardsComponent';
import { usePhotos } from '../hooks/usePhotos';

export function ListOfPhotoCards({ categoryId }) {
  const photos = usePhotos(categoryId);
  return ListOfPhotoCardsComponent({ photos });
}
