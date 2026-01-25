interface Hotel {
    id: string; // unique identifier
    name: string; // hotel name -- nombre del hotel
    address: string; // full address -- direccion completa
    rating: number; // from 0 to 5
    amenities: string[]; // e.g., ['WiFi', 'Pool', 'Gym'] -- lista de servicios
    pricePerNight: number; // in USD precio por noche
    imageUrl: string[]; // array of image URLs -- array de URLs de imagenes
    description: string; // detailed description of the hotel -- descripcion detallada del hotel
    reviewsCount: number; // number of reviews
    isFavorite: boolean; // if the hotel is marked as favorite
    isAvailable: boolean; // availability status
    rif?: string; // optional RIF field
    instagram?: string; // optional Instagram handle
    whatsapp?: string; // optional WhatsApp contact
    coordinates?: { latitude: number; longitude: number }; // optional GPS coordinates
    roomsAvailable?: number; // optional number of available rooms
    cellularPhone?: string; // optional cellular phone number
    landlinePhone?: string; // optional landline phone number
    slogan?: string; // hotel slogan
    country?: string; // optional country field - PAIS
    province?: string; // optional province field - ESTADO
    city?: string; // optional city field - CIUDAD
};

export default Hotel;