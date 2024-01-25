function MainContainer({ children }) {
    return (
        <div className={"w-full min-h-[100vh] flex text-[#8E8D8A] justify-center bg-[#EAE7DC] "}>
            <div className="max-w-screen-xl w-full bg-[#EAE7DC]">
                {children}
            </div>
        </div>

    );
}

export default MainContainer;