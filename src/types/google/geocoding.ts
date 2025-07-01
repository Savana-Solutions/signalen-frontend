export type GoogleAddress = {
  Address: string
  LongLabel: string
  latitude: number
  longitude: number
  Postal: string
  City: string
  District: string
}

export type GoogleGeocodingPayload = {
  address: GoogleAddress
  source: string
  'country-code': string
  'country-name': string
}

export type GoogleGeocodingResponse = {
  response: Array<{
    http: number
    description: string
    payload?: GoogleGeocodingPayload | GoogleGeocodingPayload[]
  }>
}

export type GoogleReverseGeocodingRequest = {
  latitude: number
  longitude: number
  countryCode: string
  city: string
}

export type GoogleForwardGeocodingRequest = {
  searchString: string
  countryCode: string
}
