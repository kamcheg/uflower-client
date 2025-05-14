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
}

export interface IResponse {
  schedule: {
    from: string
    to: string
    isAlwaysOpened: boolean
  }
  sitePhone: string
  logo: string
}

export async function fetchAbout(): Promise<IResponse> {
  const { data } = await axios.get<IDto>('/brands/about')

  return {
    schedule: {
      from: data.schedule?.from,
      to: data.schedule?.to,
      isAlwaysOpened: data.schedule?.isAlwaysOpened
    },
    sitePhone: data.sitePhone,
    logo: data.logo
  }
}
