
export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div className="mt-6  border border-gray-300 overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-6xl sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
