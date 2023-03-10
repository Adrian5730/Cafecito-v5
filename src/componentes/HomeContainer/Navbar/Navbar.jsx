import './Navbar.css'
const Navbar = () => {
    return (
        <nav className='navigation'>
            <div className='icon-container'>
                <svg className="icon-user" width="43" height="43" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_1)">
                        <circle cx="15" cy="15" r="15" fill="#BA521D" />
                    </g>
                    <path d="M9.17913 19.9042C10.1263 19.2625 11.0659 18.7698 11.9979 18.426C12.9298 18.0823 13.9338 17.9104 15.0099 17.9104C16.086 17.9104 17.0976 18.0881 18.0445 18.4436C18.9915 18.7991 19.9246 19.286 20.8437 19.9042C21.4854 19.0639 21.9361 18.2583 22.1958 17.4874C22.4555 16.7166 22.5854 15.8874 22.5854 15C22.5854 12.8573 21.8572 11.0574 20.4008 9.60029C18.9445 8.14315 17.1455 7.41457 15.0039 7.41457C12.8624 7.41457 11.0621 8.14315 9.60308 9.60029C8.14406 11.0574 7.41454 12.8573 7.41454 15C7.41454 15.8861 7.54461 16.7128 7.80474 17.48C8.06488 18.2472 8.52301 19.0552 9.17913 19.9042ZM14.9957 15.8479C14.0642 15.8479 13.2858 15.5333 12.6606 14.9041C12.0355 14.2748 11.7229 13.4995 11.7229 12.578C11.7229 11.6566 12.0369 10.8788 12.6649 10.2448C13.2929 9.61075 14.0727 9.29374 15.0042 9.29374C15.9357 9.29374 16.7141 9.61217 17.3393 10.249C17.9645 10.8859 18.277 11.6651 18.277 12.5865C18.277 13.508 17.963 14.2819 17.335 14.9083C16.707 15.5347 15.9272 15.8479 14.9957 15.8479ZM14.9973 24.7396C13.6699 24.7396 12.4151 24.4853 11.2327 23.9767C10.0504 23.468 9.01385 22.7685 8.12303 21.878C7.23223 20.9876 6.53242 19.9526 6.02359 18.773C5.51478 17.5935 5.26038 16.3331 5.26038 14.992C5.26038 13.6682 5.51628 12.4142 6.02808 11.2302C6.53989 10.0462 7.23885 9.0111 8.12496 8.12499C9.01107 7.23888 10.0443 6.5361 11.2246 6.01665C12.4049 5.49721 13.666 5.23749 15.008 5.23749C16.3318 5.23749 17.5857 5.49721 18.7698 6.01665C19.9538 6.5361 20.9888 7.23888 21.875 8.12499C22.7611 9.0111 23.4638 10.047 23.9833 11.2328C24.5027 12.4186 24.7625 13.6752 24.7625 15.0026C24.7625 16.33 24.5027 17.5858 23.9833 18.7698C23.4638 19.9538 22.7611 20.9889 21.875 21.875C20.9888 22.7611 19.9529 23.4601 18.7671 23.9719C17.5813 24.4837 16.3247 24.7396 14.9973 24.7396ZM15 22.5854C15.7944 22.5854 16.5545 22.4785 17.2802 22.2646C18.0059 22.0507 18.7583 21.6611 19.5375 21.0958C18.743 20.5611 17.9868 20.1677 17.2687 19.9156C16.5507 19.6635 15.7944 19.5375 15 19.5375C14.2055 19.5375 13.4531 19.6635 12.7427 19.9156C12.0323 20.1677 11.2798 20.5611 10.4854 21.0958C11.2645 21.6611 12.0132 22.0507 12.7312 22.2646C13.4493 22.4785 14.2055 22.5854 15 22.5854ZM15 14.1979C15.4715 14.1979 15.8606 14.0489 16.1672 13.751C16.4738 13.4531 16.627 13.0635 16.627 12.5823C16.627 12.101 16.4738 11.7076 16.1672 11.4021C15.8606 11.0965 15.4715 10.9437 15 10.9437C14.5284 10.9437 14.1393 11.0965 13.8327 11.4021C13.5262 11.7076 13.3729 12.101 13.3729 12.5823C13.3729 13.0635 13.5262 13.4531 13.8327 13.751C14.1393 14.0489 14.5284 14.1979 15 14.1979Z" fill="white" />
                    <defs>
                        <filter id="filter0_d_0_1" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>


            <div className="container-search">
                <input type="text" className="input-search" placeholder='Busca tu capsulita' />
                <svg className="icon-buscador" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_155_1612" style={{ "maskType": "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                        <rect x="0.455078" width="20.0143" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_155_1612)">
                        <path d="M16.7999 17.5L11.5461 12.25C11.1292 12.5833 10.6497 12.8472 10.1076 13.0417C9.56556 13.2361 8.98876 13.3333 8.37721 13.3333C6.86224 13.3333 5.58007 12.809 4.53071 11.7604C3.48135 10.7118 2.95667 9.43056 2.95667 7.91667C2.95667 6.40278 3.48135 5.12153 4.53071 4.07292C5.58007 3.02431 6.86224 2.5 8.37721 2.5C9.89218 2.5 11.1744 3.02431 12.2237 4.07292C13.2731 5.12153 13.7978 6.40278 13.7978 7.91667C13.7978 8.52778 13.7005 9.10417 13.5059 9.64583C13.3113 10.1875 13.0472 10.6667 12.7136 11.0833L17.9674 16.3333L16.7999 17.5ZM8.37721 11.6667C9.41962 11.6667 10.3057 11.3021 11.0354 10.5729C11.7651 9.84375 12.1299 8.95833 12.1299 7.91667C12.1299 6.875 11.7651 5.98958 11.0354 5.26042C10.3057 4.53125 9.41962 4.16667 8.37721 4.16667C7.3348 4.16667 6.44875 4.53125 5.71906 5.26042C4.98937 5.98958 4.62453 6.875 4.62453 7.91667C4.62453 8.95833 4.98937 9.84375 5.71906 10.5729C6.44875 11.3021 7.3348 11.6667 8.37721 11.6667Z" fill="#1C1B1F" />
                    </g>
                </svg>
            </div>

            <svg className="icon-filter" width="43" height="43" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                    <circle cx="15" cy="15" r="15" fill="#BA521D" />
                </g>
                <path d="M13.1813 20.025V18.2625H16.8188V20.025H13.1813ZM10.1813 15.8812V14.1187H19.8188V15.8812H10.1813ZM7.93127 11.7375V9.95624H22.0688V11.7375H7.93127Z" fill="white" />
                <defs>
                    <filter id="filter0_d_0_1" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dx="2" dy="2" />
                        <feGaussianBlur stdDeviation="1" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                    </filter>
                </defs>
            </svg>
        </nav>
    )
}

export default Navbar