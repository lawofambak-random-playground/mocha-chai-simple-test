export interface Rating {
    name: string;
    rating: number;
}

export class UberDriver {
    private ratings: Rating[] = [];

    public get averageRating(): number {
        if (this.ratings.length === 0) {
            return 0;
        }
        
        return this.ratings.reduce((previousValue, currentValue) => previousValue + currentValue.rating, 0) / this.ratings.length;
    }

    public addRating(rating: Rating): void {
        this.ratings.push(rating);
    }

    public ratingInfoOf(index: number): Rating {
        return this.ratings[index];
    }
}