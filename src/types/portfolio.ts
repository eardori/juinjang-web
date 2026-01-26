/**
 * 포트폴리오 관련 타입 정의
 */

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Facility {
  name: string;
  icon?: string;
}

export interface Room {
  name: string;
  description?: string;
  capacity?: number;
  images?: string[];
}

export interface PortfolioLocation {
  id: string;
  name: string;
  slug: string;
  region: string;
  description: string;
  features: string[];
  address: string;
  phone?: string;
  coordinates: Coordinates;
  images: string[];
  thumbnail: string;
  facilities: Facility[];
  rooms: Room[];
  bookingUrl?: string;
  naverUrl?: string;
  status: 'operating' | 'closed';
}
