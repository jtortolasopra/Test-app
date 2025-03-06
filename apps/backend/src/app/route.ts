
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    "results": [
        {
            "gender": "male",
            "name": {
                "title": "Mr",
                "first": "Sologub",
                "last": "Volodimir Zaiec"
            },
            "location": {
                "street": {
                    "number": 3172,
                    "name": "Otamana Golovatogo"
                },
                "city": "Herson",
                "state": "Hersonska",
                "country": "Ukraine",
                "postcode": 78627,
                "coordinates": {
                    "latitude": "80.8861",
                    "longitude": "-36.3284"
                },
                "timezone": {
                    "offset": "+5:45",
                    "description": "Kathmandu"
                }
            },
            "email": "sologub.volodimirzaiec@example.com",
            "login": {
                "uuid": "d2c54edc-8388-4925-b5bc-ee4070b3247a",
                "username": "silverrabbit893",
                "password": "firewall",
                "salt": "FnFIJktS",
                "md5": "37a1e18f50fc632b81da55616c5c0cce",
                "sha1": "e772ba3b8f9e0b974c43e73e96110f89cad25655",
                "sha256": "e140c6b8a3e365cd2747fe0d25047b6eb8413be3f328767d75172a409d92d171"
            },
            "dob": {
                "date": "1994-04-25T09:14:44.721Z",
                "age": 30
            },
            "registered": {
                "date": "2007-08-26T21:37:46.401Z",
                "age": 17
            },
            "phone": "(096) A61-1246",
            "cell": "(099) W96-3519",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/men/0.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
            },
            "nat": "UA"
        }
    ],
    "info": {
        "seed": "13aaf56610b99379",
        "results": 1,
        "page": 1,
        "version": "1.4"
    }
});
}