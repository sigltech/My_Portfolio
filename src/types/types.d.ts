import React from "react";

export interface HomePageProps {
    isDarkMode: boolean,
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}