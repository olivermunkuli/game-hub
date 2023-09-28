import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
} from '@chakra-ui/react';
import { Genre, useGenres } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize='2xl' marginBottom={3}>
				Genres
			</Heading>
			<List>
				{data.map((genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								boxSize='32px'
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
								borderRadius={8}
							/>
							<Button
								whiteSpace='normal'
								textAlign='left'
								fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
								fontSize='lg'
								variant='link'
								onClick={() => onSelectGenre(genre)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
