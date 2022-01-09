import React from "react";
import { Loginf } from "./login";
const skill = { name: 'kaled' };
export const user = React.createContext();

export default function Main(Props) {
    return (
        <user.Provider value={skill}>
<Loginf />
        </user.Provider>
    )
}


