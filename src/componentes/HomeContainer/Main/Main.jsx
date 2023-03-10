import './Main.css'
const Main = () => {
  return (
    <>
      <div className='container-imagen-fondo'>
        <img className='imagen-fondo' src="./images/Logo.png" alt="Logo" />
      </div>
      <main className="container-cards">
        <div className="card">
          <img src="./images/capsulas/IMPORT02.jpg" alt="Primera imagen de prueba" />
          <button type="button" className="btn-like">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
              <path d="M13.4806 21.75L12.3574 20.7664C10.9531 19.5038 9.79512 18.4158 8.88341 17.5023C7.9717 16.5888 7.24472 15.7695 6.70246 15.0445C6.16021 14.3194 5.78257 13.6573 5.56954 13.0583C5.35651 12.4593 5.25 11.8503 5.25 11.2311C5.25 9.95468 5.68677 8.88871 6.5603 8.03323C7.43383 7.17774 8.51408 6.75 9.80106 6.75C10.5278 6.75 11.2001 6.90132 11.8179 7.20397C12.4358 7.50662 12.99 7.95429 13.4806 8.54697C14.0487 7.91646 14.6299 7.45933 15.2242 7.1756C15.8186 6.89187 16.4639 6.75 17.1602 6.75C18.4691 6.75 19.5613 7.17792 20.4368 8.03376C21.3123 8.8896 21.75 9.956 21.75 11.233C21.75 11.8505 21.6435 12.4557 21.4305 13.0486C21.2174 13.6415 20.8398 14.3004 20.2975 15.0255C19.7553 15.7506 19.0259 16.5738 18.1095 17.495C17.193 18.4162 16.031 19.5067 14.6232 20.7664L13.4806 21.75ZM13.471 19.4045C14.7715 18.2318 15.8374 17.2356 16.6687 16.4159C17.4999 15.5962 18.1576 14.8805 18.6417 14.2689C19.1259 13.6573 19.4616 13.1133 19.6488 12.6368C19.836 12.1604 19.9296 11.6935 19.9296 11.2362C19.9296 10.4522 19.6723 9.80486 19.1576 9.29414C18.643 8.78342 17.9818 8.52806 17.174 8.52806C16.5412 8.52806 15.9514 8.72982 15.4047 9.13335C14.8579 9.53689 14.4102 10.0917 14.0616 10.7979H12.8996C12.5672 10.0917 12.1222 9.53689 11.5647 9.13335C11.0072 8.72982 10.4189 8.52806 9.79987 8.52806C9.00958 8.52806 8.36033 8.77936 7.85212 9.28197C7.3439 9.78458 7.08979 10.4369 7.08979 11.239C7.08979 11.7153 7.18623 12.1966 7.37912 12.683C7.57201 13.1695 7.91092 13.7209 8.39584 14.3373C8.88077 14.9538 9.53316 15.6687 10.353 16.482C11.1728 17.2954 12.2121 18.2695 13.471 19.4045Z" fill="#C8C8C8" />
            </svg>
          </button>

        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M13.4806 21.75L12.3574 20.7664C10.9531 19.5038 9.79512 18.4158 8.88341 17.5023C7.9717 16.5888 7.24472 15.7695 6.70246 15.0445C6.16021 14.3194 5.78257 13.6573 5.56954 13.0583C5.35651 12.4593 5.25 11.8503 5.25 11.2311C5.25 9.95468 5.68677 8.88871 6.5603 8.03323C7.43383 7.17774 8.51408 6.75 9.80106 6.75C10.5278 6.75 11.2001 6.90132 11.8179 7.20397C12.4358 7.50662 12.99 7.95429 13.4806 8.54697C14.0487 7.91646 14.6299 7.45933 15.2242 7.1756C15.8186 6.89187 16.4639 6.75 17.1602 6.75C18.4691 6.75 19.5613 7.17792 20.4368 8.03376C21.3123 8.8896 21.75 9.956 21.75 11.233C21.75 11.8505 21.6435 12.4557 21.4305 13.0486C21.2174 13.6415 20.8398 14.3004 20.2975 15.0255C19.7553 15.7506 19.0259 16.5738 18.1095 17.495C17.193 18.4162 16.031 19.5067 14.6232 20.7664L13.4806 21.75ZM13.471 19.4045C14.7715 18.2318 15.8374 17.2356 16.6687 16.4159C17.4999 15.5962 18.1576 14.8805 18.6417 14.2689C19.1259 13.6573 19.4616 13.1133 19.6488 12.6368C19.836 12.1604 19.9296 11.6935 19.9296 11.2362C19.9296 10.4522 19.6723 9.80486 19.1576 9.29414C18.643 8.78342 17.9818 8.52806 17.174 8.52806C16.5412 8.52806 15.9514 8.72982 15.4047 9.13335C14.8579 9.53689 14.4102 10.0917 14.0616 10.7979H12.8996C12.5672 10.0917 12.1222 9.53689 11.5647 9.13335C11.0072 8.72982 10.4189 8.52806 9.79987 8.52806C9.00958 8.52806 8.36033 8.77936 7.85212 9.28197C7.3439 9.78458 7.08979 10.4369 7.08979 11.239C7.08979 11.7153 7.18623 12.1966 7.37912 12.683C7.57201 13.1695 7.91092 13.7209 8.39584 14.3373C8.88077 14.9538 9.53316 15.6687 10.353 16.482C11.1728 17.2954 12.2121 18.2695 13.471 19.4045Z" fill="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M13.4806 21.75L12.3574 20.7664C10.9531 19.5038 9.79512 18.4158 8.88341 17.5023C7.9717 16.5888 7.24472 15.7695 6.70246 15.0445C6.16021 14.3194 5.78257 13.6573 5.56954 13.0583C5.35651 12.4593 5.25 11.8503 5.25 11.2311C5.25 9.95468 5.68677 8.88871 6.5603 8.03323C7.43383 7.17774 8.51408 6.75 9.80106 6.75C10.5278 6.75 11.2001 6.90132 11.8179 7.20397C12.4358 7.50662 12.99 7.95429 13.4806 8.54697C14.0487 7.91646 14.6299 7.45933 15.2242 7.1756C15.8186 6.89187 16.4639 6.75 17.1602 6.75C18.4691 6.75 19.5613 7.17792 20.4368 8.03376C21.3123 8.8896 21.75 9.956 21.75 11.233C21.75 11.8505 21.6435 12.4557 21.4305 13.0486C21.2174 13.6415 20.8398 14.3004 20.2975 15.0255C19.7553 15.7506 19.0259 16.5738 18.1095 17.495C17.193 18.4162 16.031 19.5067 14.6232 20.7664L13.4806 21.75ZM13.471 19.4045C14.7715 18.2318 15.8374 17.2356 16.6687 16.4159C17.4999 15.5962 18.1576 14.8805 18.6417 14.2689C19.1259 13.6573 19.4616 13.1133 19.6488 12.6368C19.836 12.1604 19.9296 11.6935 19.9296 11.2362C19.9296 10.4522 19.6723 9.80486 19.1576 9.29414C18.643 8.78342 17.9818 8.52806 17.174 8.52806C16.5412 8.52806 15.9514 8.72982 15.4047 9.13335C14.8579 9.53689 14.4102 10.0917 14.0616 10.7979H12.8996C12.5672 10.0917 12.1222 9.53689 11.5647 9.13335C11.0072 8.72982 10.4189 8.52806 9.79987 8.52806C9.00958 8.52806 8.36033 8.77936 7.85212 9.28197C7.3439 9.78458 7.08979 10.4369 7.08979 11.239C7.08979 11.7153 7.18623 12.1966 7.37912 12.683C7.57201 13.1695 7.91092 13.7209 8.39584 14.3373C8.88077 14.9538 9.53316 15.6687 10.353 16.482C11.1728 17.2954 12.2121 18.2695 13.471 19.4045Z" fill="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M13.4806 21.75L12.3574 20.7664C10.9531 19.5038 9.79512 18.4158 8.88341 17.5023C7.9717 16.5888 7.24472 15.7695 6.70246 15.0445C6.16021 14.3194 5.78257 13.6573 5.56954 13.0583C5.35651 12.4593 5.25 11.8503 5.25 11.2311C5.25 9.95468 5.68677 8.88871 6.5603 8.03323C7.43383 7.17774 8.51408 6.75 9.80106 6.75C10.5278 6.75 11.2001 6.90132 11.8179 7.20397C12.4358 7.50662 12.99 7.95429 13.4806 8.54697C14.0487 7.91646 14.6299 7.45933 15.2242 7.1756C15.8186 6.89187 16.4639 6.75 17.1602 6.75C18.4691 6.75 19.5613 7.17792 20.4368 8.03376C21.3123 8.8896 21.75 9.956 21.75 11.233C21.75 11.8505 21.6435 12.4557 21.4305 13.0486C21.2174 13.6415 20.8398 14.3004 20.2975 15.0255C19.7553 15.7506 19.0259 16.5738 18.1095 17.495C17.193 18.4162 16.031 19.5067 14.6232 20.7664L13.4806 21.75ZM13.471 19.4045C14.7715 18.2318 15.8374 17.2356 16.6687 16.4159C17.4999 15.5962 18.1576 14.8805 18.6417 14.2689C19.1259 13.6573 19.4616 13.1133 19.6488 12.6368C19.836 12.1604 19.9296 11.6935 19.9296 11.2362C19.9296 10.4522 19.6723 9.80486 19.1576 9.29414C18.643 8.78342 17.9818 8.52806 17.174 8.52806C16.5412 8.52806 15.9514 8.72982 15.4047 9.13335C14.8579 9.53689 14.4102 10.0917 14.0616 10.7979H12.8996C12.5672 10.0917 12.1222 9.53689 11.5647 9.13335C11.0072 8.72982 10.4189 8.52806 9.79987 8.52806C9.00958 8.52806 8.36033 8.77936 7.85212 9.28197C7.3439 9.78458 7.08979 10.4369 7.08979 11.239C7.08979 11.7153 7.18623 12.1966 7.37912 12.683C7.57201 13.1695 7.91092 13.7209 8.39584 14.3373C8.88077 14.9538 9.53316 15.6687 10.353 16.482C11.1728 17.2954 12.2121 18.2695 13.471 19.4045Z" fill="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>
        <div className="card">
          <img src="./images/capsulas/IMPORT03.jpg" alt="Primera imagen de prueba" />
          <svg className='btn-like' width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="26" height="26" rx="13" fill="white" stroke="#C8C8C8" />
            <path d="M19.4858 9.55772L19.8394 9.20417L19.4858 9.55772C20.1897 10.2616 20.5436 11.1297 20.5436 12.1969C20.5436 12.718 20.456 13.2287 20.2796 13.7313C20.1063 14.2248 19.7899 14.7977 19.3117 15.4525C18.8341 16.1062 18.1841 16.8582 17.356 17.7097C16.5274 18.5616 15.4735 19.5748 14.1925 20.7501L13.4849 21.3737L12.7909 20.7515C11.5092 19.5756 10.4578 18.5649 9.63483 17.7186C8.81269 16.8731 8.16555 16.1241 7.68794 15.4702C7.21021 14.8161 6.8939 14.2407 6.72056 13.7417C6.54361 13.2323 6.45605 12.718 6.45605 12.1969C6.45605 11.1286 6.80776 10.26 7.50622 9.55641C8.20475 8.85272 9.06371 8.5 10.1175 8.5C10.7045 8.5 11.2414 8.62512 11.7356 8.87221C12.2307 9.11977 12.6839 9.49034 13.0933 9.99665L13.4659 10.4575L13.8575 10.0126C14.3458 9.45763 14.8266 9.07696 15.2955 8.84759C15.7665 8.61724 16.2811 8.5 16.8467 8.5C17.9138 8.5 18.7819 8.85383 19.4858 9.55772Z" fill="#FF0000" stroke="#C8C8C8" />
          </svg>
        </div>

        <div className='container-list-nav'>
          <ul className='list-nav'>
            <li>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.87188 26.5031H12.1344V17.6344H20.8656V26.5031H25.1281V13.5438L16.5 7.08127L7.87188 13.5552V26.5031ZM4.64062 29.7344V11.9281L16.5 3.02502L28.3938 11.9281V29.7344H18.0125V20.4875H14.9875V29.7344H4.64062Z" fill="white" />
              </svg>
            </li>
            <li>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9667 29.1L14.0334 27.3666C11.6163 25.1417 9.62316 23.2244 8.05392 21.6146C6.48467 20.0048 5.23338 18.5611 4.30005 17.2833C3.36672 16.0055 2.71672 14.8388 2.35005 13.7833C1.98338 12.7277 1.80005 11.6544 1.80005 10.5634C1.80005 8.31398 2.55182 6.43551 4.05535 4.92796C5.55888 3.4204 7.41823 2.66663 9.63338 2.66663C10.8842 2.66663 12.0414 2.93329 13.1048 3.46663C14.1683 3.99996 15.1223 4.78885 15.9667 5.83329C16.9445 4.72218 17.9449 3.91663 18.9678 3.41663C19.9908 2.91663 21.1016 2.66663 22.3001 2.66663C24.553 2.66663 26.4329 3.42071 27.9397 4.92889C29.4466 6.43707 30.2001 8.31632 30.2001 10.5666C30.2001 11.6548 30.0167 12.7213 29.6501 13.7661C29.2834 14.8109 28.6334 15.9722 27.7001 17.25C26.7667 18.5277 25.5114 19.9783 23.934 21.6017C22.3566 23.225 20.3564 25.1467 17.9334 27.3666L15.9667 29.1ZM15.95 24.9666C18.1886 22.9001 20.0233 21.1445 21.454 19.7C22.8847 18.2555 24.0167 16.9944 24.85 15.9166C25.6834 14.8388 26.2612 13.8801 26.5834 13.0405C26.9056 12.2009 27.0667 11.3781 27.0667 10.5723C27.0667 9.19073 26.6238 8.04996 25.738 7.14996C24.8522 6.24996 23.7141 5.79996 22.3237 5.79996C21.2346 5.79996 20.2195 6.15551 19.2784 6.86663C18.3373 7.57774 17.5667 8.55552 16.9667 9.79996H14.9667C14.3945 8.55552 13.6286 7.57774 12.669 6.86663C11.7095 6.15551 10.6969 5.79996 9.63135 5.79996C8.27108 5.79996 7.15358 6.24281 6.27885 7.12853C5.40409 8.01424 4.96672 9.16378 4.96672 10.5772C4.96672 11.4165 5.13272 12.2648 5.46472 13.122C5.79672 13.9792 6.38005 14.9509 7.21472 16.0372C8.04938 17.1235 9.17227 18.3833 10.5834 19.8166C11.9945 21.25 13.7834 22.9666 15.95 24.9666Z" fill="white" />
              </svg>
            </li>
            <li>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.66343 26.8854C8.06353 26.8854 7.55212 26.6718 7.12921 26.2446C6.70629 25.8174 6.49483 25.3039 6.49483 24.704C6.49483 24.1041 6.70843 23.5927 7.13561 23.1698C7.56282 22.7469 8.07636 22.5354 8.67624 22.5354C9.27613 22.5354 9.78754 22.749 10.2105 23.1762C10.6334 23.6034 10.8448 24.1169 10.8448 24.7168C10.8448 25.3167 10.6312 25.8281 10.2041 26.251C9.77685 26.6739 9.2633 26.8854 8.66343 26.8854ZM20.7468 26.8854C20.1469 26.8854 19.6355 26.6718 19.2125 26.2446C18.7896 25.8174 18.5782 25.3039 18.5782 24.704C18.5782 24.1041 18.7918 23.5927 19.2189 23.1698C19.6462 22.7469 20.1597 22.5354 20.7596 22.5354C21.3595 22.5354 21.8709 22.749 22.2938 23.1762C22.7167 23.6034 22.9282 24.1169 22.9282 24.7168C22.9282 25.3167 22.7146 25.8281 22.2874 26.251C21.8602 26.6739 21.3466 26.8854 20.7468 26.8854ZM7.67296 6.94789L10.4823 12.8083H19.0917L22.2636 6.94789H7.67296ZM6.40421 4.47081H23.3231C24.0517 4.47081 24.606 4.79303 24.9861 5.43748C25.3662 6.08192 25.375 6.73643 25.0125 7.40102L21.448 13.8656C21.1862 14.2885 20.8588 14.6359 20.4659 14.9078C20.0731 15.1797 19.6237 15.3156 19.1177 15.3156H10.1802L8.70004 18.125H23.2605V20.6021H8.36775C7.3608 20.6021 6.64084 20.2597 6.20785 19.575C5.77487 18.8903 5.78997 18.1451 6.25317 17.3396L8.09587 13.9562L3.68546 4.56143H1.20837V2.08435H5.2865L6.40421 4.47081Z" fill="white" />
              </svg>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Main