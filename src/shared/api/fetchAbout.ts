import axios from "axios";

interface IDto {
  "id": number
  "createdAt": string
  "updatedAt": string
  "name": string
  "slug": string
  "email": string
  "schedule": {
    "from": string
    "to": string
    "isAlwaysOpened": boolean
  }
  "sitePhone": string
  "logo": string
  shops: {
    "id": number
    "phone": string
    "address": string
    "schedule": {
      "from": string
      "to": string
      "isAlwaysOpened": boolean
    },
    "coords": [number, number]
  }[]
}

export interface IResponse {
  schedule: {
    from: string
    to: string
    isAlwaysOpened: boolean
  }
  email: string
  sitePhone: string
  logo: string
  shops: {
    id: number
    phone: string
    address: string
    schedule: {
      from: string
      to: string
      isAlwaysOpened: boolean
    },
    coords: [number, number]
  }[]
}

export async function fetchAbout(): Promise<IResponse> {
  const { data } = await axios.get<IDto>('/brands/about')

  return {
    schedule: {
      from: data.schedule?.from,
      to: data.schedule?.to,
      isAlwaysOpened: data.schedule?.isAlwaysOpened
    },
    email: data.email,
    sitePhone: data.sitePhone,
    logo: data.logo,
    shops: (data.shops || []).map((shop) => {
      return {
        id: shop.id,
        phone: shop.phone,
        address: shop.address,
        schedule: {
          from: shop.schedule?.from || '',
          to: shop.schedule?.to || '',
          isAlwaysOpened: shop.schedule?.isAlwaysOpened || false
        },
        coords: shop.coords
      }
    })
  }
}
