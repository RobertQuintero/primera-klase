import { socialMediaType } from "./socialMediaType";

export type contactType={
    name: string,
    address: string,
    email: string,
    mobile: string,
    telephone: string,
    socialMedia: socialMediaType[],
}
