import React from 'react'

export default function SidebarItem({name, active}) {
    return (
        <button className={`sidebar`}>{name}</button>
    )
}