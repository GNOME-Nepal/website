import * as React from "react"

const ArrowIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={14}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.988 12.319a1 1 0 0 0 .118-1.41l-8-9.454a1 1 0 0 0-1.527 0l-8 9.454a1 1 0 1 0 1.527 1.292L9.342 3.65 16.58 12.2a1 1 0 0 0 1.41.117Z"
                clipRule="evenodd"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M18.343 13.328v-13h-18v13z" />
            </clipPath>
        </defs>
    </svg>
)

export default ArrowIcon;
