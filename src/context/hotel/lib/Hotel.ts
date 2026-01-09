interface Hotel {
    id: string; // unique identifier
    name: string; // hotel name
    address: string; // full address
    rating: number; // from 0 to 5
    amenities: string[]; // e.g., ['WiFi', 'Pool', 'Gym']
    pricePerNight: number; // in USD
    imageUrl: string[]; // array of image URLs
    description: string; // detailed description of the hotel
    reviewsCount: number; // number of reviews
    isFavorite: boolean; // if the hotel is marked as favorite
    isAvailable: boolean; // availability status
    country?: string; // optional country field - PAIS
    province?: string; // optional province field - ESTADO
    city?: string; // optional city field - CIUDAD
};

export default Hotel;