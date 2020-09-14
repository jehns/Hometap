import axios from 'axios'

const mockResponse = {
  "zip_code": "83843",
  "lat": 0.815457,
  "lng": -2.04099,
  "city": "Moscow",
  "state": "ID",
  "timezone": {
    "timezone_identifier": "America/Los_Angeles",
    "timezone_abbr": "PDT",
    "utc_offset_sec": -25200,
    "is_dst": "T"
  },
  "acceptable_city_names": [
    {
      "city": "University",
      "state": "ID"
    }
  ],
  "area_codes": [
    208
  ]
}

export const validateZipCode = async (zipCode) => {
  try {
    const location = await axios.get(`/${process.env.GATSBY_ZIP_CODE_API}/rest/${process.env.GATSBY_ZIP_CODE_KEY}/info.json/${zipCode}/radians`)
    return location
  } catch (error) {
    console.log("service error validating zip code:", error)
    // temporarily returning mock response because i am limited to 10 requests per hour and a faied request is usually due to that
    return mockResponse
  }
}
