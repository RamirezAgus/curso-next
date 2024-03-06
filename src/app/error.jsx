"use client";

export default function Error({error}) {
    console.error(error);

    return <div>Something went worng, try again!</div>
}