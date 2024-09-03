import { RiBodyScanFill } from "react-icons/ri";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdContactEmergency } from "react-icons/md";
import React, { useState } from 'react';
import InfoPage from "./infopage";
import interestPage from "./interestpage";
import contactPage from "./ContactPage";
import defaultPage from "./defaultPage";

// Sidebar Component
const SideBar = ({ onIconClick }) => {
    const [activeButton, setActiveButton] = useState(null);

    const handleIconClick = (text, color) => {
        setActiveButton(text);
        onIconClick(text, color);
    };

    return (
        <div className="h-screen w-36 flex flex-col bg-gray-900 text-white shadow-md">
            <SideIcon 
                icon={<RiBodyScanFill size="40" />} 
                initialColor="bg-blue-400" 
                active={activeButton === 'Info'} 
                text="Info" 
                onClick={() => handleIconClick('Info', 'bg-blue-200')}
            />
            <SideIcon 
                icon={<FaCircleQuestion size="40" />} 
                initialColor="bg-red-400" 
                active={activeButton === 'Interests'} 
                text="Interests" 
                onClick={() => handleIconClick('Interests', 'bg-red-200')}
            />
            <SideIcon 
                icon={<MdContactEmergency size="40" />} 
                initialColor="bg-green-400" 
                active={activeButton === 'Contacts'} 
                text="Contacts" 
                onClick={() => handleIconClick('Contacts', 'bg-green-200')}
            />
        </div>
    );
};

// Sidebar Icon Component
const SideIcon = ({ icon, initialColor, text, active, onClick }) => {
    const bgColor = active ? 'bg-yellow-400' : initialColor;
    const borderRadius = active ? 'rounded-full' : 'rounded-none';

    return (
        <button 
            type="button" 
            className={`sideicon ${bgColor} ${borderRadius} transition ease-in-out group flex items-center justify-center p-4`}
            onClick={onClick}
        >
            {icon}
            <span className="info group-hover:scale-100">
                {text}
            </span>
        </button>
    );
};

// Main Content Component
const MainContent = ({ activeContent }) => {
    let ContentComponent;

    switch (activeContent) {
        case 'Info':
            ContentComponent = InfoPage;
            break;
        case 'Interests':
            ContentComponent = interestPage;
            break;
        case 'Contacts':
            ContentComponent = contactPage;
            break;
        default:
            ContentComponent = defaultPage;
            break;
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen p-8">
            <ContentComponent />
        </div>
    );
};


// Main App Component
const App = () => {
    const [activeContent, setActiveContent] = useState(null);

    const handleIconClick = (content) => {
        setActiveContent(content);
    };

    return (
        <div className={`flex h-screen`}>
            <SideBar onIconClick={handleIconClick} />
            <main className="flex-grow">
                <MainContent activeContent={activeContent} />
            </main>
        </div>
    );
};

export default App;
