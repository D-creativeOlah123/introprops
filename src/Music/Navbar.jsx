import './navbar.css'

function Navbar() {
    return(
        <nav>
            <div className="left">
                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5Ljk3OCAyOS45NzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5Ljk3OCAyOS45Nzg7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4KPGc+Cgk8cGF0aCBkPSJNMjUuNDYyLDE5LjEwNXY2Ljg0OEg0LjUxNXYtNi44NDhIMC40ODl2OC44NjFjMCwxLjExMSwwLjksMi4wMTIsMi4wMTYsMi4wMTJoMjQuOTY3YzEuMTE1LDAsMi4wMTYtMC45LDIuMDE2LTIuMDEyICAgdi04Ljg2MUgyNS40NjJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMTQuNjIsMTguNDI2bC01Ljc2NC02Ljk2NWMwLDAtMC44NzctMC44MjgsMC4wNzQtMC44MjhzMy4yNDgsMCwzLjI0OCwwczAtMC41NTcsMC0xLjQxNmMwLTIuNDQ5LDAtNi45MDYsMC04LjcyMyAgIGMwLDAtMC4xMjktMC40OTQsMC42MTUtMC40OTRjMC43NSwwLDQuMDM1LDAsNC41NzIsMGMwLjUzNiwwLDAuNTI0LDAuNDE2LDAuNTI0LDAuNDE2YzAsMS43NjIsMCw2LjM3MywwLDguNzQyICAgYzAsMC43NjgsMCwxLjI2NiwwLDEuMjY2czEuODQyLDAsMi45OTgsMGMxLjE1NCwwLDAuMjg1LDAuODY3LDAuMjg1LDAuODY3cy00LjkwNCw2LjUxLTUuNTg4LDcuMTkzICAgQzE1LjA5MiwxOC45NzksMTQuNjIsMTguNDI2LDE0LjYyLDE4LjQyNnoiIGZpbGw9IiMwMDAwMDAiLz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" alt="spotify logo" />
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>
                <div className='input'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
                    <input type="text"  placeholder='What do you want to play'/>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-280H200v280Zm280-440h240v-80H480v80Z"/></svg>
                    </div>
            </div>
            <div className="right">
                <div className='icon'>
                    <li>Premiun</li>
                    <li>Support</li>
                    <li>Premiun</li>
                </div>
                <anchor>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
                    Install app</anchor>
                <button>Sign up</button>
                <button>Log in</button>
            </div>
        </nav>
    )
}

export default Navbar