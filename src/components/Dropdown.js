import React, { useState, useEffect } from 'react';
import './main.css';

const Dropdown = () => {
    const menus = [
        { id: 1, label: 'ANDHRA PRADESH', items: [' Tirupati Temple', 'Simhachalam Temple', 'Kanipakam Vinayaka Temple'] },
        { id: 2, label: 'ORISSA', items: ['Jagannath Temple', '  Lingaraja Temple', 'Sun Temple'] },
        { id: 3, label: 'BIHAR', items: ['Mangala Gowri Temple', 'Mahendra Nath Temple', 'Chaumukhi Mahadev Temple'] },
        { id: 4, label: 'DELHI', items: ['BAPS Swaminarayan Akshardham Temple', 'Chhatarpur Temple', ' Lotus Temple'] },
        { id: 5, label: 'JAMMU & KASHMIR', items: ['Amarnath Temple.', 'Vaishno Dev Temple', 'Avantiswami Temple'] },
        { id: 6, label: 'TAMIL NAIDU', items: ['Sri Ranganathaswamy Temple', 'Nataraja Temple', 'Meenakshi Temple'] },
        { id: 7, label: 'KERALA', items: ['Sree Padmanabhaswamy Temple', 'Kal Bhairav Temple', 'Sabarimala Sastha Temple'] },
        { id: 8, label: 'PUNJAB', items: ['The Golden Temple', 'Mukteshwar Mahadev Temple', 'Kali Mata Mandir'] },
    ];

    const DropdownMenu = () => {
        const [openMenuId, setOpenMenuId] = useState(null);

        const toggleMenu = (menuId) => {
            setOpenMenuId((prevOpenMenuId) => (prevOpenMenuId === menuId ? null : menuId));
        };

        const closeMenuOnOutsideClick = (event) => {
            if (openMenuId && !event.target.closest('.dropdown-menu')) {
                setOpenMenuId(null);
            }
        };

        useEffect(() => {
            document.addEventListener('click', closeMenuOnOutsideClick);

            return () => {
                document.removeEventListener('click', closeMenuOnOutsideClick);
            };
        }, [openMenuId]);
        
        return (
            <div className="menu-container">
                {menus.map((menu) => (
                    <div key={menu.id} className={`dropdown-menu ${openMenuId === menu.id ? 'active' : ''}`}>
                        <button onClick={() => toggleMenu(menu.id)} className="toggle-button">
                            {menu.label} {openMenuId === menu.id ? '▲' : '▼'}
                        </button>
                        {openMenuId === menu.id && (
                            <div className="dropdown-content">
                                {menu.items.map((item, index) => (
                                    <a key={index} href="#">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    // Render the DropdownMenu component
    return <DropdownMenu />;
};

export default Dropdown;
