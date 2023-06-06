export interface MovieInterface {
    id: string;
    movieDescription: string;
    movieCreator: string;
    movieStarring: string;
    characters: Character[];
}

interface Character {
    id: string;
    characterName: string;
    characterDescription: string;
    characterStatus: string;
    characterGender: string;
    characterAge: string;
    characterAffiliation: string;
    characterDebut: string;
}