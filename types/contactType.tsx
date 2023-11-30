import { socialMediaType } from "./socialMediaType";

export type contactType={
    Address: string,
    email: string,
    mobile: string,
    telephone: string,
    socialMedia: socialMediaType[],
}
