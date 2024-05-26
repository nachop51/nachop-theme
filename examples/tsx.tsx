import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

// Define a type for the context value
interface UserContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define a User type
interface User {
    name: string;
    age: number;
    email: string;
}

// Define a component for providing context
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

// Async function to fetch user data
const fetchUser = async (): Promise<User> => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    return response.data;
};

// Main component
const App: React.FC = () => {
    const { user, setUser } = useUser();

    useEffect(() => {
        // Fetch user data on component mount
        const getUser = async () => {
            const userData = await fetchUser();
            setUser(userData);
        };

        getUser();
    }, [setUser]);

    return (
        <div>
            <h1>React TypeScript Feature Demonstration</h1>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Age: {user.age}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    );
};

// Wrap the App component with UserProvider
const AppWithProvider: React.FC = () => (
    <UserProvider>
        <App />
    </UserProvider>
);

export default AppWithProvider;
