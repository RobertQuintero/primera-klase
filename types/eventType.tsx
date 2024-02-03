

export type EventType = {
    _createdAt: string,
    _updatedAt: string,
    _id: string,
    eventImage: string,
    eventTitle: string,
    eventDescription: string,
    date: string,
    time: string,
    location: string,
    eventLink: string,
    eventType: string,
    specialGuest: specialGuestType[],
}

export type specialGuestType = {
    title: string,
    name: string,
}